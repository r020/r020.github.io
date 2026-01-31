/* Dark Enchantment Mixology - High-end cocktail bar aesthetic
   Hero: Dramatic full-screen with dark forest imagery and luminous text
   Cocktails: Focus on craft mixology with sophisticated presentation
   Bar Experience: Upscale atmosphere with mystical undertones
   Dark palette with emerald and gold accents
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wine, Sparkles, Clock, MapPin, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Wine className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">The Enchanted Grove</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#cocktails" className="text-sm font-medium hover:text-primary transition-colors">Cocktails</a>
              <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
              <a href="#visit" className="text-sm font-medium hover:text-primary transition-colors">Visit</a>
              <Button size="sm" className="ml-4">Reserve</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dramatic dark with luminous overlay */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-forest-apothecary.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40"></div>
        </div>
        
        {/* Luminous particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-30" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="label-text text-primary mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Mystical Mixology
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8 leading-none text-foreground">
              The Enchanted<br />Grove
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground leading-relaxed max-w-xl">
              A clandestine forest bar where botanical spirits meet ancient alchemy. 
              <span className="mystical-accent block mt-3 text-primary">Craft cocktails in an otherworldly realm.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base px-8 py-6">
                View Cocktail Menu
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 glass-card">
                Reserve Your Table
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* Signature Cocktails Section */}
      <section id="cocktails" className="py-32 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
              <Wine className="w-4 h-4" />
              Signature Creations
            </div>
            <h2 className="text-5xl md:text-6xl mb-6">Mystical Mixology</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each cocktail is a carefully orchestrated ritual, blending rare botanicals with premium spirits 
              to create transcendent drinking experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cocktail 1 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/cocktail-botanical-art.png" 
                  alt="Forest Elixir" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Forest Elixir</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Gin infused with wild juniper, elderflower liqueur, fresh sage, and a whisper of cucumber. 
                  Garnished with edible flowers.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Herbaceous • Ethereal</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 2 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80" 
                  alt="Midnight Ritual" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Midnight Ritual</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Activated charcoal-infused vodka, blackberry, rosemary smoke, and a touch of vanilla. 
                  Served in a crystal coupe.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Dark • Mysterious</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 3 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80" 
                  alt="Golden Alchemy" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Golden Alchemy</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Aged rum, turmeric honey, fresh ginger, cardamom, and citrus. 
                  A healing elixir with warmth and depth.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Warming • Spiced</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 4 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/botanical-tea-ceremony.png" 
                  alt="Emerald Dream" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Emerald Dream</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Ceremonial matcha, Japanese whisky, coconut cream, and mint. 
                  A fusion of tradition and innovation.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Creamy • Zen</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 5 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80" 
                  alt="Witching Hour" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Witching Hour</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Mezcal, lavender-infused Aperol, grapefruit, and a dash of absinthe. 
                  Smoky, floral, and utterly enchanting.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Smoky • Floral</span>
                </div>
              </CardContent>
            </Card>

            {/* Non-Alcoholic Option */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/healing-herbs-collection.png" 
                  alt="Mystic Tonic" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Mystic Tonic</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  House-made botanical tonic with adaptogenic herbs, citrus, and sparkling water. 
                  Non-alcoholic sophistication.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Restorative • Pure</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="glass-card">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Bar Experience Section */}
      <section id="experience" className="py-32 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/forest-ambiance-texture.png)' }}
        ></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="label-text text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                The Experience
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
                Where Mysticism Meets Mastery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Step through the threshold into an intimate sanctuary where the boundaries between 
                the natural and supernatural blur. Our bar is a living forest, where ancient trees 
                meet modern mixology, and every cocktail tells a story of transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dim candlelight flickers across reclaimed wood and living moss walls. The air carries 
                whispers of sage and citrus. Our master mixologists craft each drink with the precision 
                of alchemists, using rare botanicals foraged from hidden groves and premium spirits 
                aged to perfection.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wine className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold">Craft Cocktails</h3>
                    <p className="text-muted-foreground">Award-winning mixologists creating liquid art with rare ingredients</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold">Enchanted Atmosphere</h3>
                    <p className="text-muted-foreground">Immersive forest setting with living botanicals and candlelit ambiance</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold">Intimate Setting</h3>
                    <p className="text-muted-foreground">Limited seating ensures an exclusive, personal experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-forest-apothecary.png" 
                  alt="Bar interior" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-32 bg-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Find The Grove
              </div>
              <h2 className="text-5xl md:text-6xl mb-6">Visit Us</h2>
              <p className="text-lg text-muted-foreground">
                A hidden sanctuary awaits those who seek it
              </p>
            </div>

            <Card className="glass-card backdrop-blur-xl border-border/50 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl mb-6">Location</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      Our mystical pop-up bar appears in select locations throughout the season. 
                      Each venue is carefully chosen to enhance the enchanted forest experience.
                    </p>
                    
                    <h3 className="text-3xl mb-6 mt-10">Hours</h3>
                    <div className="space-y-3 text-lg">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Wednesday - Thursday</span>
                        <span className="text-foreground">6pm - 1am</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Friday - Saturday</span>
                        <span className="text-foreground">6pm - 2am</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Sunday</span>
                        <span className="text-foreground">5pm - 11pm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl mb-6">Reservations</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      Due to our intimate setting, reservations are highly recommended. 
                      Walk-ins welcome based on availability.
                    </p>
                    
                    <div className="space-y-4">
                      <Button className="w-full justify-center text-lg py-6">
                        Reserve Your Table
                      </Button>
                      <Button variant="outline" className="w-full justify-center text-lg py-6 glass-card">
                        View Current Location
                      </Button>
                    </div>
                    
                    <div className="mt-10 pt-10 border-t border-border/30">
                      <h3 className="text-2xl mb-4">Connect</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p>Instagram: @EnchantedGrove</p>
                        <p>Email: reservations@enchantedgrove.com</p>
                        <p>Phone: (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Wine className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">The Enchanted Grove</span>
            </div>
            
            <p className="mystical-accent text-muted-foreground text-lg">
              Where every sip is a spell, every night is magic.
            </p>
            
            <p className="text-sm text-muted-foreground">
              © 2026 The Enchanted Grove. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
