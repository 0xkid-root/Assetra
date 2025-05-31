'use client';

import { FileText, Search, Filter, Download, Eye, Trash2, Plus } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const documents = [
  {
    id: 1,
    name: 'Investment Agreement.pdf',
    type: 'PDF',
    size: '2.5 MB',
    lastModified: '2024-01-15',
    category: 'Legal',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    id: 2,
    name: 'Property Analysis Report.xlsx',
    type: 'Excel',
    size: '1.8 MB',
    lastModified: '2024-01-14',
    category: 'Analysis',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    name: 'Tax Documentation.pdf',
    type: 'PDF',
    size: '3.2 MB',
    lastModified: '2024-01-13',
    category: 'Financial',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 4,
    name: 'Property Photos.zip',
    type: 'ZIP',
    size: '15.7 MB',
    lastModified: '2024-01-12',
    category: 'Media',
    gradient: 'from-orange-500 to-red-600'
  },
];

const categories = [
  { name: 'All Documents', count: 28 },
  { name: 'Legal', count: 8 },
  { name: 'Financial', count: 12 },
  { name: 'Analysis', count: 5 },
  { name: 'Media', count: 3 },
];

export default function DocumentsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Documents</h1>
            <p className="text-muted-foreground mt-2">Manage and organize your important files</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents..."
                className="pl-10 pr-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="p-2 rounded-xl border bg-background hover:bg-accent transition-colors"
              aria-label="Filter"
            >
              <Filter className="h-4 w-4" />
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Upload</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-accent transition-colors"
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Storage</h2>
              <div className="space-y-4">
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">23.5 GB used</span>
                  <span className="font-medium">75%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-card shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-6 py-4 text-left font-medium text-muted-foreground">Name</th>
                      <th className="px-6 py-4 text-left font-medium text-muted-foreground">Category</th>
                      <th className="px-6 py-4 text-left font-medium text-muted-foreground">Size</th>
                      <th className="px-6 py-4 text-left font-medium text-muted-foreground">Modified</th>
                      <th className="px-6 py-4 text-left font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {documents.map((document) => (
                      <tr key={document.id} className="group hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`rounded-lg bg-gradient-to-r ${document.gradient} p-2 text-white`}>
                              <FileText className="h-4 w-4" />
                            </div>
                            <span className="font-medium">{document.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{document.category}</td>
                        <td className="px-6 py-4 text-muted-foreground">{document.size}</td>
                        <td className="px-6 py-4 text-muted-foreground">{document.lastModified}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              className="p-2 rounded-lg hover:bg-accent transition-colors"
                              aria-label="View"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              className="p-2 rounded-lg hover:bg-accent transition-colors"
                              aria-label="Download"
                            >
                              <Download className="h-4 w-4" />
                            </button>
                            <button
                              className="p-2 rounded-lg hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900 dark:hover:text-red-400 transition-colors"
                              aria-label="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}