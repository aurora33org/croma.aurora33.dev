import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AdminDashboard from './dashboard';
import { AppError } from '@/lib/utils/errors';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Aurora Image Compressor Admin Dashboard',
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  // Check authentication
  if (!session?.user?.email) {
    redirect('/auth/login');
  }

  // Check admin status
  if (!session.user.isAdmin) {
    throw new AppError('Forbidden - Admin access required', 403);
  }

  return <AdminDashboard />;
}
