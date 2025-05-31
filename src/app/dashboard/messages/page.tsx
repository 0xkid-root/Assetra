'use client';

import {  Search, Phone, Video, MoreVertical, Send, Image, Paperclip, Smile } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const conversations = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      status: 'online'
    },
    lastMessage: 'Hey, I had a question about the investment opportunity...',
    time: '2m ago',
    unread: 2,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg',
      status: 'offline'
    },
    lastMessage: 'The market analysis report has been updated.',
    time: '1h ago',
    unread: 0,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    user: {
      name: 'Emily Davis',
      avatar: '/avatars/emily.jpg',
      status: 'online'
    },
    lastMessage: 'Thanks for the property tour arrangement!',
    time: '3h ago',
    unread: 1,
    gradient: 'from-orange-500 to-red-600'
  },
];

const messages = [
  {
    id: 1,
    type: 'received',
    content: 'Hi! I was looking at the investment opportunity you shared earlier.',
    time: '10:30 AM'
  },
  {
    id: 2,
    type: 'sent',
    content: 'Hello! Yes, what would you like to know about it?',
    time: '10:31 AM'
  },
  {
    id: 3,
    type: 'received',
    content: 'Could you provide more details about the expected returns and investment timeline?',
    time: '10:32 AM'
  },
  {
    id: 4,
    type: 'sent',
    content: 'Of course! The projected annual return is 8.5% with a minimum investment period of 24 months. Would you like me to send you the full prospectus?',
    time: '10:35 AM'
  },
];

export default function MessagesPage() {
  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-2rem)] flex rounded-2xl bg-card shadow-lg overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="p-4 hover:bg-accent cursor-pointer transition-colors border-b"
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                    {conversation.user.status === 'online' && (
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">{conversation.user.name}</p>
                      <p className="text-xs text-muted-foreground">{conversation.time}</p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className={`rounded-full bg-gradient-to-r ${conversation.gradient} w-5 h-5 flex items-center justify-center`}>
                      <span className="text-xs font-medium text-white">{conversation.unread}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
              </div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-xl hover:bg-accent transition-colors"
                aria-label="Voice call"
              >
                <Phone className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-xl hover:bg-accent transition-colors"
                aria-label="Video call"
              >
                <Video className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-xl hover:bg-accent transition-colors"
                aria-label="More options"
              >
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl p-4 ${message.type === 'sent' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                >
                  <p>{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-xl hover:bg-accent transition-colors"
                aria-label="Attach image"
              >
                <Image className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-xl hover:bg-accent transition-colors"
                aria-label="Attach file"
              >
                <Paperclip className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="p-2 rounded-xl hover:bg-accent transition-colors"
                aria-label="Add emoji"
              >
                <Smile className="h-5 w-5" />
              </button>
              <button
                className="p-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}