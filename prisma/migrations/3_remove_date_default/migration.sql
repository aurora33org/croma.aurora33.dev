-- Drop the default constraint from UserUsage.date field
ALTER TABLE "UserUsage" ALTER COLUMN "date" DROP DEFAULT;
