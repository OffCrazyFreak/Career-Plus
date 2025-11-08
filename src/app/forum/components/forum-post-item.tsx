import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle } from "lucide-react";

interface ForumPostItemProps {
  post: {
    id: number;
    title: string;
    category: string;
    country: string;
    flag: string;
    preview: string;
    author: string;
    avatar: string;
    date: string;
    upvotes: number;
    comments: number;
  };
}

export function ForumPostItem({ post }: ForumPostItemProps) {
  return (
    <Card className="hover:shadow-md transition-all duration-300 cursor-pointer group">
      <CardContent className="">
        <div className="flex gap-3">
          {/* Avatar */}
          <Avatar className="w-10 h-10 ring-2 ring-background flex-shrink-0">
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback className="bg-[#002F66] text-white text-sm">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          {/* Post Content */}
          <div className="flex-1 space-y-1.5 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold group-hover:text-[#002F66] transition-colors line-clamp-1">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.country} {post.flag}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">
              {post.preview}
            </p>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-muted-foreground hover:text-[#002F66] transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="font-medium">{post.upvotes}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground hover:text-[#002F66] transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="font-medium">{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
