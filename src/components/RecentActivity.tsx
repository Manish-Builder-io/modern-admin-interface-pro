
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "Alice Johnson",
    action: "placed a new order",
    item: "MacBook Pro 16-inch",
    time: "2 minutes ago",
    status: "completed",
    avatar: "AJ"
  },
  {
    id: 2,
    user: "Bob Smith",
    action: "updated profile",
    item: "Personal information",
    time: "15 minutes ago",
    status: "pending",
    avatar: "BS"
  },
  {
    id: 3,
    user: "Carol White",
    action: "submitted a review",
    item: "iPhone 15 Pro",
    time: "1 hour ago",
    status: "completed",
    avatar: "CW"
  },
  {
    id: 4,
    user: "David Brown",
    action: "requested refund",
    item: "Wireless Headphones",
    time: "2 hours ago",
    status: "processing",
    avatar: "DB"
  },
  {
    id: 5,
    user: "Emily Davis",
    action: "joined the platform",
    item: "New user registration",
    time: "3 hours ago",
    status: "completed",
    avatar: "ED"
  }
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <Avatar>
                <AvatarFallback className="bg-blue-100 text-blue-700 font-medium">
                  {activity.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  <span className="font-semibold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-sm text-gray-500 truncate">{activity.item}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge className={`text-xs ${statusColors[activity.status as keyof typeof statusColors]}`}>
                  {activity.status}
                </Badge>
                <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
