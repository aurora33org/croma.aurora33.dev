import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';
import { logger } from '../utils/logger';

interface FormatConfig {
  quality?: number;
  effort?: number;
  mozjpeg?: boolean;
  compressionLevel?: number;
}

interface ResizeOptions {
  width?: number;
  height?: number;
  fit?: string;
}

interface ProcessSettings {
  format: string;
  quality?: number;
  resize?: ResizeOptions;
}

interface ProcessResult {
  success: boolean;
  originalSize?: number;
  compressedSize?: number;
  reduction?: number;
  error?: string;
}

class ImageProcessor {
  private formatConfigs: Record<string, FormatConfig> = {
    webp: {
      quality: 80,
      effort: 4
    },
    jpeg: {
      quality: 80,
      mozjpeg: true
    },
    png: {
      compressionLevel: 9,
      quality: 80
    }
  };

  async processImage(inputPath: string, outputPath: string, settings: ProcessSettings): Promise<ProcessResult> {
    try {
      const { format, quality, resize } = settings;

      // Get format config
      const formatConfig: FormatConfig = { ...this.formatConfigs[format] };
      if (quality !== undefined) {
        formatConfig.quality = quality;
      }

      // Create sharp instance
      let pipeline = sharp(inputPath);

      // Apply resize if specified
      if (resize && (resize.width || resize.height)) {
        const resizeOptions: any = {
          fit: resize.fit || 'inside',
          withoutEnlargement: true
        };
        if (resize.width) resizeOptions.width = resize.width;
        if (resize.height) resizeOptions.height = resize.height;
        pipeline = pipeline.resize(resizeOptions);
      }

      // Convert to target format and save
      await pipeline
        .toFormat(format as any, formatConfig)
        .toFile(outputPath);

      // Get file sizes
      const inputStats = await fs.stat(inputPath);
      const outputStats = await fs.stat(outputPath);

      logger.debug(`Processed: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);

      return {
        success: true,
        originalSize: inputStats.size,
        compressedSize: outputStats.size,
        reduction: Math.round(((inputStats.size - outputStats.size) / inputStats.size) * 100)
      };
    } catch (error: any) {
      logger.error(`Failed to process image ${inputPath}:`, error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async processImages(
    inputFiles: string[],
    outputDir: string,
    settings: ProcessSettings,
    progressCallback?: (processed: number, total: number) => void
  ) {
    const results: any[] = [];
    let processed = 0;

    for (const inputFile of inputFiles) {
      const filename = path.basename(inputFile);
      const nameWithoutExt = path.parse(filename).name;
      const outputFilename = `${nameWithoutExt}.${settings.format}`;
      const outputPath = path.join(outputDir, outputFilename);

      const result = await this.processImage(inputFile, outputPath, settings);

      results.push({
        filename,
        outputFilename,
        ...result
      });

      processed++;

      if (progressCallback) {
        progressCallback(processed, inputFiles.length);
      }
    }

    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const totalOriginalSize = results.reduce((sum: number, r: any) => sum + (r.originalSize || 0), 0);
    const totalCompressedSize = results.reduce((sum: number, r: any) => sum + (r.compressedSize || 0), 0);

    logger.success(`Batch processing complete: ${successful} successful, ${failed} failed`);

    return {
      results,
      summary: {
        total: inputFiles.length,
        successful,
        failed,
        totalOriginalSize,
        totalCompressedSize,
        totalReduction: totalOriginalSize > 0
          ? Math.round(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100)
          : 0
      }
    };
  }

  async validateImage(filePath: string) {
    try {
      const metadata = await sharp(filePath).metadata();
      return {
        valid: true,
        format: metadata.format,
        width: metadata.width,
        height: metadata.height,
        size: metadata.size
      };
    } catch (error: any) {
      logger.warn(`Invalid image file: ${filePath}`, error.message);
      return {
        valid: false,
        error: error.message
      };
    }
  }

  getSupportedFormats() {
    return Object.keys(this.formatConfigs);
  }
}

export const imageProcessor = new ImageProcessor();
