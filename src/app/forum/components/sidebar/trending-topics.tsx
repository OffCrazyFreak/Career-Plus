import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface TrendingTopicsProps {
  topics: string[];
}

export function TrendingTopics({ topics }: TrendingTopicsProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold">Trending Topics</h3>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-start gap-2 text-sm hover:text-[#002F66] cursor-pointer transition-colors"
          >
            <span className="text-muted-foreground font-medium min-w-[20px]">
              {index + 1}.
            </span>
            <span className="line-clamp-2">{topic}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
