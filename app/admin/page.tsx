import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import AdminDashboard from './dashboard';

const ADMIN_EMAIL = 'admin@example.com';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Aurora Image Compressor Admin Dashboard',
};

export default async function AdminPage() {
  const session = await getServerSession();

  // Check authentication
  if (!session?.user?.email) {
    redirect('/auth/login');
  }

  // Check admin status
  if (session.user.email !== ADMIN_EMAIL) {
    redirect('/');
  }

  return <AdminDashboard />;
}
