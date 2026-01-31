/* Botanical Apothecary Modernism Design
   Hero: Full-viewport with generated forest apothecary image, asymmetric text overlay
   Menu: Modular cards with botanical illustrations, herbarium-style labels
   About: Diagonal layout with healing philosophy
   Location: Clean contact section with glass morphism effect
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, Heart, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full viewport with forest apothecary image */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-forest-apothecary.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="label-text text-primary mb-4 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Pop-Up Forest Bar
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 leading-tight text-foreground">
              The Enchanted Grove
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed">
              Where ancient botanical wisdom meets modern wellness culture. 
              <span className="botanical-accent block mt-2">Healing through nature's finest ingredients.</span>
            </p>
            <Button size="lg" className="text-lg px-8 py-6 rounded-lg">
              Explore Our Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Asymmetric layout */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/forest-ambiance-texture.png)' }}
        ></div>
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="label-text text-primary mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Our Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
                A Sanctuary of Healing & Mysticism
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Step into a realm where the forest's ancient wisdom flows through every carefully crafted beverage. 
                Our pop-up bar honors the healing properties of botanicals, blending traditional herbalism with 
                contemporary mixology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each drink is a ritual, each ingredient chosen for its restorative essence. 
                From ceremonial matcha to forest-foraged cocktails, we invite you to experience 
                wellness through taste.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/images/botanical-tea-ceremony.png" 
                alt="Botanical tea ceremony" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Modular grid with botanical cards */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Our Offerings
            </div>
            <h2 className="text-4xl md:text-5xl mb-6">Botanical Menu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted elixirs infused with healing herbs, mystical botanicals, and pure intention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Matcha Category */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/botanical-tea-ceremony.png" 
                  alt="Ceremonial Matcha" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="label-text text-primary mb-2">Ceremonial Grade</div>
                <h3 className="text-2xl mb-3">Matcha Rituals</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Pure ceremonial matcha whisked to perfection. Traditional preparation for modern mindfulness.
                </p>
                <div className="botanical-accent text-sm text-primary">
                  Antioxidant-rich • Focus-enhancing
                </div>
              </CardContent>
            </Card>

            {/* Tea Category */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/healing-herbs-collection.png" 
                  alt="Healing Herbal Teas" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="label-text text-primary mb-2">Apothecary Blends</div>
                <h3 className="text-2xl mb-3">Healing Teas</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Forest-foraged herbs and flowers steeped with intention. Chamomile, lavender, rose, and sage.
                </p>
                <div className="botanical-accent text-sm text-primary">
                  Calming • Restorative • Aromatic
                </div>
              </CardContent>
            </Card>

            {/* Cocktails Category */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/cocktail-botanical-art.png" 
                  alt="Botanical Cocktails" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="label-text text-primary mb-2">Mystical Mixology</div>
                <h3 className="text-2xl mb-3">Forest Cocktails</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Botanical spirits infused with herbs, edible flowers, and forest essences. Each a work of art.
                </p>
                <div className="botanical-accent text-sm text-primary">
                  Handcrafted • Artisanal • Enchanting
                </div>
              </CardContent>
            </Card>

            {/* Soft Drinks Category */}
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80" 
                  alt="Botanical Refreshments" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="label-text text-primary mb-2">Pure & Natural</div>
                <h3 className="text-2xl mb-3">Herbal Elixirs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Sparkling botanicals, fresh-pressed juices, and house-made tonics. Vitality in every sip.
                </p>
                <div className="botanical-accent text-sm text-primary">
                  Refreshing • Nourishing • Vibrant
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section - Diagonal cut with image */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'url(/images/hero-forest-apothecary.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)'
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
              <Heart className="w-4 h-4" />
              The Experience
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              Immerse Yourself in Forest Magic
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our pop-up space transforms into an enchanted grove where every detail honors nature's healing power. 
              Surrounded by living plants, soft candlelight, and the gentle aroma of herbs, you'll find yourself 
              transported to a mystical sanctuary. Whether you seek a moment of quiet reflection with ceremonial 
              matcha or celebration with friends over botanical cocktails, The Enchanted Grove welcomes all who 
              seek wellness and wonder.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2">Organic Ingredients</h3>
                <p className="text-muted-foreground">Sustainably sourced, ethically harvested</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2">Intentional Craft</h3>
                <p className="text-muted-foreground">Each drink prepared with mindfulness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2">Healing Atmosphere</h3>
                <p className="text-muted-foreground">A sanctuary for body and spirit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="label-text text-primary mb-4 inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Find Us
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">Visit The Grove</h2>
              <p className="text-lg text-muted-foreground">
                A mystical pop-up experience awaits you
              </p>
            </div>

            <Card className="backdrop-blur-sm bg-card/80 border-2 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl mb-4">Location</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Our enchanted space appears in various locations throughout the season. 
                      Follow us on social media for pop-up announcements and special events.
                    </p>
                    
                    <h3 className="text-2xl mb-4 mt-8">Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Thursday - Friday</span>
                        <span>5pm - 11pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday - Sunday</span>
                        <span>2pm - 11pm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl mb-4">Connect</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Join our community to receive updates on new locations, seasonal menu offerings, 
                      and exclusive herbal workshops.
                    </p>
                    
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start text-lg py-6">
                        Instagram @EnchantedGrove
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-lg py-6">
                        hello@enchantedgrove.com
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">The Enchanted Grove</span>
            </div>
            
            <p className="text-muted-foreground botanical-accent">
              Where healing meets mysticism, one sip at a time.
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
