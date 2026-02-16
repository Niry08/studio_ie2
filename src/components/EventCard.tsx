import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string;
  link: string;
  icon: React.ReactNode;
  img?: string;
}

const EventCard = ({ title, description, date, location, participants, link, icon, img }: EventCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
            {img ? <img src={img} alt={title} className="w-10 h-10 object-cover rounded-lg" /> : icon}
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>{participants}</span>
          </div>
        </div>
        <Link to={link}>
          <Button className="w-full">Découvrir et s'inscrire</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default EventCard;
