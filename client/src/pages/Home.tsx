/* Dark Enchantment Mixology - Food for Humans Philosophy
   Hero: Dramatic full-screen emphasizing sustainable, nature-connected mixology
   Philosophy: Collective connecting people through conscious food and drink
   Cocktails: Local, seasonal, wild plants with organic ingredients
   Approach: Responsible sourcing, ethical practices, minimal environmental impact
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wine, Sparkles, Leaf, MapPin, ChevronRight, Sprout, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img 
                src="/images/food-for-humans-logo.png" 
                alt="Food for Humans" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#philosophy" className="text-sm font-medium hover:text-primary transition-colors">Philosophy</a>
              <a href="#cocktails" className="text-sm font-medium hover:text-primary transition-colors">Cocktails</a>
              <a href="#approach" className="text-sm font-medium hover:text-primary transition-colors">Our Approach</a>
              <a href="#visit" className="text-sm font-medium hover:text-primary transition-colors">Visit</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <Sprout className="w-4 h-4" />
              Sustainable Mixology Collective
            </div>
            <h1 className="text-7xl md:text-8xl lg:text-9xl mb-8 leading-none text-foreground">
              Food for<br />Humans
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground leading-relaxed max-w-2xl">
              A collective and platform connecting people through food and drink, promoting a healthy, sustainable, and conscious way of life.
              <span className="mystical-accent block mt-3 text-primary">Flavor, sustainability, and togetherness in every sip.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base px-8 py-6">
                Explore Our Philosophy
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 glass-card">
                View Menu
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

      {/* Philosophy Section */}
      <section id="philosophy" className="py-32 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="label-text text-primary mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Our Philosophy
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
                Connecting Through Conscious Craft
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Food for Humans is more than a bar—it's a collective and platform that connects people through 
                food and drink, promoting a healthy, sustainable, and conscious way of life. Each cocktail uses 
                local, seasonal, and wild plants, flavored waters, and natural syrups, creating an experience 
                deeply connected to nature.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The project encourages responsible sourcing, ethical practices, minimal environmental impact, 
                and biodegradable materials, while connecting producers, bartenders, and the community through 
                bar and culinary creativity.
              </p>
              <p className="text-lg text-foreground leading-relaxed font-medium">
                Each cocktail becomes a small ambassador of the Food for Humans philosophy: flavor, sustainability, 
                and togetherness in every sip.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/images/botanical-tea-ceremony.png" 
                alt="Sustainable ingredients" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Mixology Approach */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/forest-ambiance-texture.png)' }}
        ></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Modern Approach
            </div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
              Beyond Mixed Drinks
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Today, cocktails are no longer understood as simply mixed alcoholic drinks, but as a means of 
              creating complex flavors. Flavor complexity is achieved through advanced culinary and bar techniques 
              using ingredients of exclusively organic origin.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The selection of medicinal herbs gathered in nature often reflects the location where the drinks 
              themselves are served—bitters, aromatics, flavored carbonated and non-carbonated waters, herbal teas. 
              All drinks can be paired with a healthy bite of a suitable flavor profile, presented in menu form.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card backdrop-blur-xl border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4">Local & Wild</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seasonal and wild plants foraged from nature, reflecting the local terroir and creating 
                  authentic connections to place.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card backdrop-blur-xl border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4">Organic Origin</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exclusively organic ingredients processed through advanced culinary techniques to achieve 
                  extraordinary flavor complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card backdrop-blur-xl border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl mb-4">Conscious Craft</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Responsible sourcing, ethical practices, and minimal environmental impact guide every 
                  decision we make.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Signature Cocktails Section */}
      <section id="cocktails" className="py-32 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
              <Wine className="w-4 h-4" />
              Signature Creations
            </div>
            <h2 className="text-5xl md:text-6xl mb-6">Nature-Connected Cocktails</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each drink is crafted with local, seasonal, and wild plants, natural syrups, and flavored waters. 
              Complex flavors achieved through advanced techniques and organic ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cocktail 1 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/cocktail-botanical-art.png" 
                  alt="Wild Forest Elixir" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Wild Forest Elixir</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Foraged juniper and elderflower with wild sage, cucumber water, and organic gin. 
                  Garnished with edible wildflowers from local meadows.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Herbaceous • Local • Wild</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 2 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80" 
                  alt="Seasonal Root Ritual" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Seasonal Root Ritual</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Organic vodka infused with seasonal roots, wild blackberry, rosemary smoke, and house-made 
                  vanilla syrup. A celebration of earth's bounty.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Earthy • Seasonal • Aromatic</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 3 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&q=80" 
                  alt="Golden Harvest" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Golden Harvest</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Aged organic rum with turmeric honey, fresh ginger, wild cardamom, and citrus from local orchards. 
                  A healing elixir of warmth.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Warming • Medicinal • Spiced</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 4 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/botanical-tea-ceremony.png" 
                  alt="Ceremonial Green" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Ceremonial Green</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Organic ceremonial matcha, Japanese whisky, coconut cream, and wild mint. 
                  A fusion honoring traditional practices with modern technique.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Creamy • Mindful • Zen</span>
                </div>
              </CardContent>
            </Card>

            {/* Cocktail 5 */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80" 
                  alt="Meadow Smoke" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Meadow Smoke</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Organic mezcal, wild lavender-infused Aperol, local grapefruit, and herbal bitters. 
                  Smoky, floral, and utterly connected to the land.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Smoky • Floral • Wild</span>
                </div>
              </CardContent>
            </Card>

            {/* Non-Alcoholic Option */}
            <Card className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-2 overflow-hidden bg-card border-border/50">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src="/images/healing-herbs-collection.png" 
                  alt="Living Water" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
              </div>
              <CardContent className="p-8 -mt-20 relative z-10">
                <h3 className="text-3xl mb-3 text-foreground">Living Water</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  House-made botanical tonic with adaptogenic herbs, wild citrus, flavored carbonated water, 
                  and herbal tea. Non-alcoholic sophistication.
                </p>
                <div className="pt-4 border-t border-border/30">
                  <span className="mystical-accent text-primary text-sm">Restorative • Pure • Adaptogenic</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6 text-lg">
              All cocktails can be paired with healthy bites of suitable flavor profiles
            </p>
            <Button size="lg" variant="outline" className="glass-card">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-32 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/forest-ambiance-texture.png)' }}
        ></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-forest-apothecary.png" 
                  alt="Sustainable practices" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div>
              <div className="label-text text-primary mb-4 flex items-center gap-2">
                <Sprout className="w-4 h-4" />
                Our Approach
              </div>
              <h2 className="text-5xl md:text-6xl mb-8 leading-tight">
                Connecting Community Through Craft
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Food for Humans connects producers, bartenders, and the community through bar and culinary 
                creativity. We believe in building relationships that honor the earth and the people who 
                cultivate it.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold">Responsible Sourcing</h3>
                    <p className="text-muted-foreground">Local, seasonal, and wild ingredients sourced with care for the environment</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold">Ethical Practices</h3>
                    <p className="text-muted-foreground">Fair relationships with producers and commitment to biodegradable materials</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sprout className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-semibold">Minimal Impact</h3>
                    <p className="text-muted-foreground">Every decision considers environmental impact and sustainability</p>
                  </div>
                </div>
              </div>
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
                Join Us
              </div>
              <h2 className="text-5xl md:text-6xl mb-6">Experience Food for Humans</h2>
              <p className="text-lg text-muted-foreground">
                Connect with nature, community, and conscious craft
              </p>
            </div>

            <Card className="glass-card backdrop-blur-xl border-border/50 shadow-2xl">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl mb-6">Location</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      Our pop-up bar appears in carefully selected locations that enhance the connection 
                      between our drinks and the natural environment. Each venue reflects our commitment 
                      to sustainability and community.
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
                    <h3 className="text-3xl mb-6">Connect</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      Join our community to learn about upcoming events, seasonal ingredients, and the 
                      stories behind our sustainable practices.
                    </p>
                    
                    <div className="space-y-4">
                      <Button className="w-full justify-center text-lg py-6">
                        View Current Location
                      </Button>
                      <Button variant="outline" className="w-full justify-center text-lg py-6 glass-card">
                        Join Our Community
                      </Button>
                    </div>
                    
                    <div className="mt-10 pt-10 border-t border-border/30">
                      <h3 className="text-2xl mb-4">Get in Touch</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <p>Instagram: @FoodForHumans</p>
                        <p>Email: hello@foodforhumans.com</p>
                        <p>Community: Join our mailing list</p>
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
            <div className="flex items-center">
              <img 
                src="/images/food-for-humans-logo.png" 
                alt="Food for Humans" 
                className="h-16 w-auto"
              />
            </div>
            
            <p className="mystical-accent text-muted-foreground text-lg text-center">
              Flavor, sustainability, and togetherness in every sip.
            </p>
            
            <p className="text-sm text-muted-foreground">
              © 2026 Food for Humans. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
