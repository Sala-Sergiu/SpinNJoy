using API.Entities;
using System.Collections.Generic;
using System.Linq;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product> 
            {
                new Product
                {
                    Brand = "KTM",
                    Model = "Prowler Exonic",
                    Type = "MTB",
                    Color = "Red",
                    Price = 1100000,
                    Weight = 13.40m,
                    Description = "THE COLUMBUS OF THE ALPS. It seems that the time of the great adventurers is long gone, but with the PROWLER the ability to go beyond has returned. Riding this PROWLER means that your personal expedition into the mountains starts now, nothing is out of your reach. The PROWLER guarantees a superb bikepark experience and helps you escape the routine of everyday life. The PROWLERs 160mm/150mm travel combined with the STRAIGHT-LINE-LINK (SLL) technology ensures a perfect response to the most challenging of trails. For those without lift access to their favourite downhill trails the PROWLERs downhill capability is matched by its climbing ability. All this is made possible by the progressive geommetry. You can choose between two highend carbon models and one aluminium model at a lower price point.",
                    Stock = 20,
                    ImageUrl = "/images/products/image-1.png"
                },
                new Product
                {                   
                    Brand= "KTM",
                    Model= "Scarp Elite",
                    Type= "MTB",
                    Color= "White",
                    Price= 349900,
                    Weight= 13.10m,
                    Description= "MAKING YOU A LEADER. You asked for a more accessible Scarp model, and we listened. With the ELITE and 294 versions, we offer entry-level models that put you on the victory lane even at lower costs. The ELITE uses the EVO II carbon frame with aluminium rear triangle. The SCARP 294 aluminium fully is the ideal bike to start with in the full-suspension range. The name SCARP stands for years of experience in the race bike sector and will not disappoint you even with the entry-level models.",
                    Stock= 50,
                    ImageUrl= "/images/products/image-1.png",
                },
                new Product
                {
                    Brand= "KTM",
                    Model= "Revelator Alto Exonic",
                    Type= "Road",
                    Color= "Black",
                    Price= 899900,
                    Weight= 6.9m,
                    Description= "NEXT CHAPTER. LEAVE THE VALLEY BEHIND. Since 2018, the name ALTO is part of our roadbike range. Translated from the Italian / Spanish language, ALTO means 'high up' and with the ALTO bike you will stand out above the rest. Together with our third participation in the Tour de France, we’ve been also launching the third new edition of the REVELATOR ALTO. The development work was based on feedback from our professional teams and incorporated the experience gained from the toughest racetracks in the world. In addition, the new ALTO frame underwent the toughest testing period in KTM history. The pre-series prototypes were already sent to the 'Hell of the North' and had to prove itself on the pavé of 'Paris-Roubaix'. At the same time, the perfect aerodynamics were fine-tuned in the wind tunnel. The final values confirm both= The frames ideal climbing skills as well as the low air resistance. On his first ride with the new ALTO, Frenchman Pierre Rolland rode straight into the best climber’s jersey of the Dauphiné Tour. The journey of the first serial frames led from Mattighofen, via Copenhagen, to the Champs Élysées in Paris. The frames of the Tour de France professionals are now waiting for your use in different model variants.",
                    Stock= 50,
                    ImageUrl= "/images/products/image-1.png"
                },
                new Product
                {
                    Brand= "KTM",
                    Model= "Revelator Alto Pro",
                    Type= "Road",
                    Color= "Black",
                    Price= 249900,
                    Weight= 9.6m,
                    Description= "NEXT CHAPTER. LEAVE THE VALLEY BEHIND. Since 2018, the name ALTO is part of our roadbike range. Translated from the Italian / Spanish language, ALTO means 'high up' and with the ALTO bike you will stand out above the rest. Together with our third participation in the Tour de France, we’ve been also launching the third new edition of the REVELATOR ALTO. The development work was based on feedback from our professional teams and incorporated the experience gained from the toughest racetracks in the world. In addition, the new ALTO frame underwent the toughest testing period in KTM history. The pre-series prototypes were already sent to the 'Hell of the North' and had to prove itself on the pavé of 'Paris-Roubaix'. At the same time, the perfect aerodynamics were fine-tuned in the wind tunnel. The final values confirm both= The frames ideal climbing skills as well as the low air resistance. On his first ride with the new ALTO, Frenchman Pierre Rolland rode straight into the best climber’s jersey of the Dauphiné Tour. The journey of the first serial frames led from Mattighofen, via Copenhagen, to the Champs Élysées in Paris. The frames of the Tour de France professionals are now waiting for your use in different model variants.",
                    Stock= 50,
                    ImageUrl= "/images/products/image-1.png"
                },
                new Product
                {
                        Brand = "Cannondale",
                        Model = "Scalpel-Si Carbon 3",
                        Type = "MTB",  
                        Color = "Red",
                        Price = 1100000,
                        Weight = 13.40m,    
                        Description = "THE COLUMBUS OF THE ALPS. It seems that the time of the great adventurers is long gone, but with the SCALPEL the ability to go beyond has returned. Riding this SCALPEL means that your personal expedition into the mountains starts now, nothing is out of your reach. The SCALPEL guarantees a superb bikepark experience and helps you escape the routine of everyday life. The SCALPEL's 160mm/150mm travel combined with the LEFTY OCHO technology ensures a perfect response to the most challenging of trails. For those without lift access to their favourite downhill trails the SCALPEL's downhill capability is matched by its climbing ability. All this is made possible by the progressive geometry. You can choose between two high-end carbon models and one aluminum model at a lower price point.",
                        Stock = 20,
                        ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Cannondale",
                    Model = "F-Si Carbon 2",
                    Type = "MTB",    
                    Color = "White",
                    Price = 349900,
                    Weight = 13.10m,    
                    Description = "MAKING YOU A LEADER. You asked for a more accessible Scalpel model, and we listened. With the F-SI and 29 versions, we offer entry-level models that put you on the victory lane even at lower costs. The F-SI uses the EVO II carbon frame with aluminum rear triangle. The F-SI 29 aluminum fully is the ideal bike to start with in the full-suspension range. The name F-SI stands for years of experience in the race bike sector and will not disappoint you even with the entry-level models.",
                    Stock = 50,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Cannondale",
                    Model = "SuperSix EVO Hi-MOD",
                    Type = "Road",    
                    Color = "Black",
                    Price = 899900,
                    Weight = 6.9m,    
                    Description = "NEXT CHAPTER. LEAVE THE VALLEY BEHIND. Since 2018, the name EVO is part of our roadbike range. Translated from the Italian / Spanish language, EVO means 'evolution' and with the EVO bike you will stand out above the rest. Together with our participation in the Tour de France, we've been also launching the third new edition of the SUPERSIX EVO. The development work was based on feedback from our professional teams and incorporated the experience gained from the toughest racetracks in the world. In addition, the new EVO frame underwent the toughest testing period in Cannondale history. The pre-series prototypes were already sent to the 'Hell of the North' and had to prove itself on the pavé of 'Paris-Roubaix'. At the same time, the perfect aerodynamics were fine-tuned in the wind tunnel. The final values confirm both= The frames ideal climbing skills as well as the low air resistance. On his first ride with the new EVO, Frenchman Pierre Rolland rode straight into the best climber’s jersey of the Dauphiné Tour. The journey of the first serial frames led from Mattighofen, via Copenhagen, to the Champs Élysées in Paris. The frames of the Tour de France professionals are now waiting for your use in different model variants.",
                    Stock = 50,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Cannondale",
                    Model = "CAAD13 Disc 105",
                    Type = "Road",   
                    Color = "Black",
                    Price = 249900,
                    Weight = 9.6m,    
                    Description = "NEXT CHAPTER. LEAVE THE VALLEY BEHIND. Since 2018, the name EVO is part of our roadbike range. Translated from the Italian / Spanish language, EVO means 'evolution' and with the EVO bike you will stand out above the rest. Together with our participation in the Tour de France, we've been also launching the third new edition of the SUPERSIX EVO. The development work was based on feedback from our professional teams and incorporated the experience gained from the toughest racetracks in the world. In addition, the new EVO frame underwent the toughest testing period in Cannondale history. The pre-series prototypes were already sent to the 'Hell of the North' and had to prove itself on the pavé of 'Paris-Roubaix'. At the same time, the perfect aerodynamics were fine-tuned in the wind tunnel. The final values confirm both= The frames ideal climbing skills as well as the low air resistance. On his first ride with the new EVO, Frenchman Pierre Rolland rode straight into the best climber’s jersey of the Dauphiné Tour. The journey of the first serial frames led from Mattighofen, via Copenhagen, to the Champs Élysées in Paris. The frames of the Tour de France professionals are now waiting for your use in different model variants.",
                    Stock = 50,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Trek",
                    Model = "Domane SLR 9",
                    Type = "Road",
                    Color = "Blue",
                    Price = 1200000,
                    Weight = 7.2m,
                    Description = "PERFORMANCE AND COMFORT. The Domane SLR 9 is Trek's flagship endurance road bike. It combines top-tier performance with unparalleled comfort. With IsoSpeed technology, it smooths out rough roads and allows for long rides without fatigue. Its aerodynamic design and lightweight carbon frame make it perfect for competitive racing and long-distance adventures.",
                    Stock = 30,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Specialized",
                    Model = "S-Works Tarmac SL7",
                    Type = "Road",
                    Color = "Red",
                    Price = 1400000,
                    Weight = 6.8m,
                    Description = "FAST, LIGHT, AND AERO. The S-Works Tarmac SL7 combines the speed of an aero bike with the weight of a climbing bike. Specialized has perfected the balance of performance and ride quality, making this the ultimate race machine. It's designed to win, whether you're climbing the steepest hills or sprinting to the finish line.",
                    Stock = 20,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Giant",
                    Model = "Defy Advanced Pro 1",
                    Type = "Endurance",
                    Color = "Black",
                    Price = 250000,
                    Weight = 8.5m,
                    Description = "SMOOTH AND STABLE. The Defy Advanced Pro 1 is built for endurance riders who value comfort on long rides. Its composite frame absorbs road vibrations, while the endurance geometry ensures a comfortable riding position. It's a perfect balance of performance and compliance, making it ideal for all-day adventures.",
                    Stock = 40,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Scott",
                    Model = "Spark RC 900 World Cup",
                    Type = "MTB",
                    Color = "Green",
                    Price = 320000,
                    Weight = 11.3m,
                    Description = "READY TO WIN. The Scott Spark RC 900 World Cup is a cross-country race bike designed for podium finishes. Its lightweight carbon frame, combined with advanced suspension technology, provides exceptional handling and speed on the toughest trails. It's the choice of champions, ready to take on any race or adventure.",
                    Stock = 25,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Bianchi",
                    Model = "Oltre XR4",
                    Type = "Road",
                    Color = "Celeste",
                    Price = 1100000,
                    Weight = 7.1m,
                    Description = "ULTIMATE AERO ROAD BIKE. The Bianchi Oltre XR4 delivers the perfect combination of speed, power, and control. Its advanced carbon frame and integrated aero features make it a top choice for competitive cyclists looking to gain an edge.",
                    Stock = 25,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Pinarello",
                    Model = "Dogma F12",
                    Type = "Road",
                    Color = "Black",
                    Price = 1500000,
                    Weight = 6.9m,
                    Description = "THE ULTIMATE RACING MACHINE. The Pinarello Dogma F12 is renowned for its precision and performance. Its state-of-the-art aerodynamics and lightweight design make it a formidable contender in any race. It’s the choice of champions and built to win.",
                    Stock = 15,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Cervélo",
                    Model = "R5",
                    Type = "Road",
                    Color = "Red",
                    Price = 1300000,
                    Weight = 7.0m,
                    Description = "ENGINEERED FOR SPEED. The Cervélo R5 is a purebred road racing bike, optimized for climbing and sprinting. With a meticulously designed carbon frame, it offers unmatched stiffness and responsiveness for the most demanding cyclists.",
                    Stock = 20,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Merida",
                    Model = "Scultura Team",
                    Type = "Road",
                    Color = "Green",
                    Price = 999900,
                    Weight = 7.4m,
                    Description = "THE PERFECT CLIMBING MACHINE. The Merida Scultura Team is designed for the hills, combining lightweight construction with superb handling. Its aerodynamic frame and top-tier components make it ideal for serious climbers and competitive racers.",
                    Stock = 30,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Canyon",
                    Model = "Ultimate CF SLX",
                    Type = "Road",
                    Color = "Gray",
                    Price = 1100000,
                    Weight = 7.3m,
                    Description = "ALL-AROUND PERFORMER. The Canyon Ultimate CF SLX is a versatile road bike that excels in all conditions. Its lightweight frame and aerodynamic design make it perfect for both climbing and sprinting, offering a balanced ride for all types of cyclists.",
                    Stock = 25,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Santa Cruz",
                    Model = "Tallboy",
                    Type = "MTB",
                    Color = "Orange",
                    Price = 850000,
                    Weight = 12.0m,
                    Description = "VERSATILITY AND CONTROL. The Santa Cruz Tallboy is a trail bike that offers a perfect blend of cross-country speed and downhill capability. Its robust construction and advanced suspension system provide a smooth and controlled ride on any terrain.",
                    Stock = 20,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Yeti",
                    Model = "SB130",
                    Type = "MTB",
                    Color = "Turquoise",
                    Price = 920000,
                    Weight = 11.8m,
                    Description = "AGILITY AND STRENGTH. The Yeti SB130 is built for aggressive trail riding, featuring a responsive suspension system and a durable carbon frame. It offers exceptional handling and stability, making it a top choice for serious mountain bikers.",
                    Stock = 15,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Giant",
                    Model = "TCR Advanced Pro",
                    Type = "Road",
                    Color = "Blue",
                    Price = 1050000,
                    Weight = 7.2m,
                    Description = "RACE-READY PERFORMANCE. The Giant TCR Advanced Pro is engineered for speed and efficiency. Its lightweight frame and precision handling make it ideal for competitive racing, offering a perfect balance of stiffness and compliance.",
                    Stock = 35,
                    ImageUrl = "/images/products/image-1.png",
                },
                new Product
                {
                    Brand = "Scott",
                    Model = "Addict RC",
                    Type = "Road",
                    Color = "Yellow",
                    Price = 1150000,
                    Weight = 6.8m,
                    Description = "CLIMBING MADE EASY. The Scott Addict RC is designed for those who love to climb. Its ultra-lightweight frame and race-oriented geometry ensure maximum efficiency and performance on the steepest ascents.",
                    Stock = 25,
                    ImageUrl = "/images/products/image-1.png",
                }
            };

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
