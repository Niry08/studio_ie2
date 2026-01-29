import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, MapPin, Users, Trophy, Target } from "lucide-react";

const CourseAPied = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              Sport
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Course à Pied 6km
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participez à notre course de 6km dans le magnifique village d'aegerten. Cela se déroulera durant la fête de village.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-16">
            {/* Event Details */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Détails de l'événement</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-muted-foreground">9 mai 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Lieu</p>
                      <p className="text-muted-foreground">Départ: Village de Nidau <br />Arrivée: Village d'Aegerten</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Participants</p>
                      <p className="text-muted-foreground">Environ 200 places disponibles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Prix</p>
                      <p className="text-muted-foreground">Goodies + argent (vainqueurs)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Parcours et catégories</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Parcours</p>
                      <p>6km de pur bonheur</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-secondary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Catégories</p>
                      <p>Tout le monde court dans la même catégorie</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg mt-4">
                    <p className="font-semibold text-foreground mb-2">Informations pratiques</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Durant la fête de village</li>
                      <li>Boissons disponibles</li>
                      <li>Snacks disponibles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

            <div className="flex justify-center">
              <a className="btn bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded flex items-center gap-2" href="https://infomaniak.events/fr-ch/sport/lake-run/9bbb64a8-0238-4c8b-b82b-7503c6a7f5f2/event/1589873" target="_blank" rel="noopener noreferrer">
                Inscrivez-vous
                <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="currentColor" aria-hidden="true" className="inline-block w-4 h-4">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>arrow-right-circle</title>
                    <defs></defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Icon-Set" transform="translate(-308.000000, -1087.000000)" fill="currentColor"></g>
                      <g id="Icon-Set" transform="translate(-308.000000, -1087.000000)" fill="currentColor">
                        <path d="M324,1117 C316.268,1117 310,1110.73 310,1103 C310,1095.27 316.268,1089 324,1089 C331.732,1089 338,1095.27 338,1103 C338,1110.73 331.732,1117 324,1117 L324,1117 Z M324,1087 C315.163,1087 308,1094.16 308,1103 C308,1111.84 315.163,1119 324,1119 C332.837,1119 340,1111.84 340,1103 C340,1094.16 332.837,1087 324,1087 L324,1087 Z M330.535,1102.12 L324.879,1096.46 C324.488,1096.07 323.855,1096.07 323.465,1096.46 C323.074,1096.86 323.074,1097.49 323.465,1097.88 L327.586,1102 L317,1102 C316.447,1102 316,1102.45 316,1103 C316,1103.55 316.447,1104 317,1104 L327.586,1104 L323.465,1108.12 C323.074,1108.51 323.074,1109.15 323.465,1109.54 C323.855,1109.93 324.488,1109.93 324.879,1109.54 L330.535,1103.88 C330.775,1103.64 330.85,1103.31 330.795,1103 C330.85,1102.69 330.775,1102.36 330.535,1102.12 L330.535,1102.12 Z" id="arrow-right-circle"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
        </div>

        {/* Sponsors Section */}
        <div className="container mx-auto max-w-6xl mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Nos Sponsors</h2>
            <p className="text-muted-foreground">Merci à nos partenaires qui rendent cet événement possible</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "Coop", logo: "/sponsors_images/course/coop.png" },
              { name: "Focus Water", logo: "/sponsors_images/course/focus_water.png" },
              { name: "Nurissa", logo: "/sponsors_images/course/nurissa.svg" },
              { name: "Valgine", logo: "/sponsors_images/course/valgine.png" }
            ].map((sponsor) => (
              <div
                key={sponsor.name}
                className="group relative bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="relative w-full h-24 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {sponsor.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
};

export default CourseAPied;