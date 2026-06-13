export interface ServiceBenefit {
  title: string;
  desc: string;
}
export interface ServiceStep {
  title: string;
  desc: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface Service {
  slug: string;
  name: string;
  navLabel: string;
  icon: string;
  cardDescription: string;
  h1: string;
  title: string;
  metaDescription: string;
  intro: string[];
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faqs: Faq[];
}

export const services: Service[] = [
  {
    slug: 'landscape-design',
    name: 'Landscape Design',
    navLabel: 'Landscape Design',
    icon: '✏️',
    cardDescription:
      'Custom, HOA-ready landscape plans built around drought-tolerant planting and Camarillo curb appeal.',
    h1: 'Custom Landscape Design in Camarillo, CA',
    title: 'Landscape Design in Camarillo, CA | Camarillo Landscape Solutions',
    metaDescription:
      'Custom landscape design in Camarillo, CA. Drought-tolerant gardens, HOA-compliant designs, and full outdoor living spaces. Call 805-398-6469.',
    intro: [
      'A great Camarillo yard does not happen by accident. With our Mediterranean climate, strict HOA architectural standards, and the clean Spanish-style character that defines neighborhoods from Mission Oaks to Springville, the design phase is where a project is won or lost. Our landscape design service translates how you actually want to live outdoors into a buildable plan that earns approval and thrives in Ventura County conditions.',
      'We design with water in mind from the first sketch. Camarillo falls within the Calleguas Municipal Water District, and the smartest yards here pair California native and drought-tolerant planting with efficient hydrozoning so each area gets exactly the water it needs. The result reads lush and intentional without fighting the climate or the water bill.',
      'Whether you are softening the front elevation of a Spanish-style home in Las Posas Estates or reimagining a low-maintenance courtyard in Leisure Village, every plan is drawn to your lot, your light, and your community guidelines so installation goes smoothly and the finished landscape still looks right in ten years.',
    ],
    benefits: [
      {
        title: 'Curb Appeal That Fits the Neighborhood',
        desc: 'Designs tuned to Camarillo architecture and streetscapes, so your home stands out while still belonging on the block.',
      },
      {
        title: 'HOA Approval Built In',
        desc: 'Plans are drawn to common Camarillo HOA standards with the plant lists, materials, and drawings boards expect to see.',
      },
      {
        title: 'Real Water Savings',
        desc: 'Drought-tolerant palettes and smart hydrozoning lower your Calleguas water use without making the yard look sparse.',
      },
      {
        title: 'Higher Property Value',
        desc: 'A cohesive, professionally designed landscape is one of the most visible upgrades you can make to a Camarillo home.',
      },
    ],
    process: [
      {
        title: 'Free Consultation',
        desc: 'We walk the property, talk through how you use the space, your budget, and any HOA requirements you are working within.',
      },
      {
        title: 'Site Analysis',
        desc: 'We assess sun, soil, drainage, slope, and existing irrigation so the design works with your lot rather than against it.',
      },
      {
        title: 'Concept & Plant Plan',
        desc: 'You receive a custom layout with hardscape, planting zones, and a drought-tolerant plant palette suited to Camarillo.',
      },
      {
        title: 'Revisions & Approval',
        desc: 'We refine the plan with you and prepare clean drawings to submit for HOA architectural review when required.',
      },
      {
        title: 'Build-Ready Handoff',
        desc: 'The finalized design moves straight into installation with clear scope, materials, and a project timeline.',
      },
    ],
    faqs: [
      {
        q: 'How long does HOA design approval take in Camarillo?',
        a: 'Most Camarillo-area HOAs review submittals on a set schedule, so expect roughly two to six weeks depending on how often the architectural committee meets. We prepare plans in the format boards expect, which helps avoid the back-and-forth that drags approvals out.',
      },
      {
        q: 'Do you offer drought-tolerant and California native designs?',
        a: 'Yes. Given Calleguas water rates and ongoing conservation expectations, most of our Camarillo designs lean heavily on natives and low-water Mediterranean plants, paired with efficient drip irrigation and hydrozoning.',
      },
      {
        q: 'How many design revisions are included?',
        a: 'Our design process includes a round of revisions after the initial concept so we can dial in plant choices, layout, and budget. Larger estate projects in areas like Santa Rosa Valley sometimes warrant additional rounds, which we scope up front.',
      },
      {
        q: 'Is the design fee separate from installation?',
        a: 'Design is a distinct phase with its own scope, and many clients choose to design first and phase the installation over time. When you build with us, design investment is credited toward qualifying installation projects.',
      },
      {
        q: 'Can you redesign just the front yard for HOA curb-appeal compliance?',
        a: 'Absolutely. Front-yard refreshes for HOA compliance and curb appeal are one of our most common Camarillo requests, and they are a great way to start before tackling the backyard.',
      },
    ],
  },
  {
    slug: 'hardscaping',
    name: 'Hardscaping',
    navLabel: 'Hardscaping',
    icon: '🧱',
    cardDescription:
      'Paver patios, driveways, walkways, retaining walls, and fire features built to last in Ventura County.',
    h1: 'Hardscaping Services in Camarillo, CA',
    title: 'Hardscaping in Camarillo, CA | Pavers, Patios & Retaining Walls',
    metaDescription:
      'Professional hardscaping services in Camarillo. Paver patios, driveways, retaining walls, and outdoor living spaces. Call 805-398-6469.',
    intro: [
      'Hardscaping is the backbone of any usable Camarillo yard. Paver patios, walkways, driveways, seating walls, fire pits, and pergolas turn an ordinary backyard into space you actually live in, and they do it with materials that hold up beautifully under Southern California sun. Done well, hardscape also solves real problems: drainage, slope, and the awkward dead zones that grass never quite fixes.',
      'Camarillo homes lean Spanish and Mediterranean, so material and color selection matters. We help you choose pavers, stone, and finishes that complement tile roofs and stucco elevations rather than fighting them, and we keep selections within the palettes most local HOAs approve.',
      'From a clean front walkway in Calleguas to a full outdoor living buildout on a larger lot in Las Posas Estates, our hardscaping is engineered with proper base prep and drainage so it stays level, stays put, and adds lasting value to your property.',
    ],
    benefits: [
      {
        title: 'Living Space You Use Daily',
        desc: 'Patios, walkways, and seating areas that make the backyard a true extension of the home year-round.',
      },
      {
        title: 'Strong Property Value Return',
        desc: 'Quality hardscape is among the most durable, high-return improvements you can add to a Camarillo property.',
      },
      {
        title: 'Architecture-Matched Materials',
        desc: 'Paver and stone selections chosen to complement Spanish-style and Mediterranean homes common across Camarillo.',
      },
      {
        title: 'Built for the Long Haul',
        desc: 'Proper base compaction and drainage prevent the settling and cracking that plague rushed installs.',
      },
    ],
    process: [
      {
        title: 'Consultation & Layout',
        desc: 'We measure the space, discuss how you want to use it, and lay out patios, paths, and walls to scale.',
      },
      {
        title: 'Material Selection',
        desc: 'You choose pavers, stone, and finishes from options suited to your home style and HOA palette.',
      },
      {
        title: 'Excavation & Base Prep',
        desc: 'We grade for drainage and build a compacted base, the step that determines whether hardscape lasts.',
      },
      {
        title: 'Installation',
        desc: 'Pavers, walls, and features are set, leveled, and cut precisely, with joints locked and edges restrained.',
      },
      {
        title: 'Final Detailing',
        desc: 'We sand, seal where appropriate, clean the site, and walk the finished project with you.',
      },
    ],
    faqs: [
      {
        q: 'Do I need HOA approval for a paver patio in Camarillo?',
        a: 'Front-yard and visible hardscape almost always require HOA architectural approval in Camarillo communities, and many HOAs maintain approved material and color lists. We help you select compliant materials and prepare the documentation boards ask for.',
      },
      {
        q: 'Are pavers better than poured concrete?',
        a: 'For most Camarillo yards, yes. Pavers flex with ground movement instead of cracking, individual units can be lifted and reset if needed, and they offer far more color and pattern options to match Spanish-style homes. Concrete can be more economical for large flat areas.',
      },
      {
        q: 'Do hardscaping projects require permits?',
        a: 'Patios and walkways usually do not, but retaining walls over a certain height, structures, and anything tied to drainage or grading can require a City of Camarillo or County permit. We handle permitting where it applies.',
      },
      {
        q: 'How much maintenance do pavers need?',
        a: 'Very little. Occasional rinsing, refreshing polymeric joint sand every few years, and periodic sealing keep a paver installation looking new. Weeds in joints are rare when the base and sand are done correctly.',
      },
      {
        q: 'Can you build retaining walls on a sloped Camarillo Heights lot?',
        a: 'Yes. Hillside lots in Camarillo Heights frequently need retaining and slope stabilization, and we engineer walls with proper drainage and reinforcement for elevated, view-oriented parcels.',
      },
    ],
  },
  {
    slug: 'irrigation',
    name: 'Irrigation',
    navLabel: 'Irrigation',
    icon: '💧',
    cardDescription:
      'Smart controllers, drip conversions, and repairs that cut water use and keep you compliant.',
    h1: 'Irrigation Installation & Repair in Camarillo, CA',
    title: 'Irrigation Systems in Camarillo, CA | Installation & Repair',
    metaDescription:
      'Irrigation installation, repair, and smart controller upgrades in Camarillo. Save water and stay compliant with local water restrictions. Call 805-398-6469.',
    intro: [
      'In Camarillo, irrigation is where water bills are won or lost. Because the area is served by the Calleguas Municipal Water District and its member agencies, efficient watering is not just good practice, it is increasingly expected. A well-designed system delivers the right amount of water to the right zone at the right time, keeping plants healthy while cutting waste.',
      'We install and repair complete irrigation systems, convert thirsty spray zones to high-efficiency drip, and upgrade old timers to weather-based smart controllers that adjust automatically to local conditions. For many homeowners, a smart controller and drip conversion pays for itself through lower water use and healthier plants.',
      'Whether you have a broken valve flooding the parkway, dry spots ruining the lawn, or you simply want to modernize an aging system before the next dry stretch, we diagnose the real problem and fix it right rather than just patching symptoms.',
    ],
    benefits: [
      {
        title: 'Lower Water Bills',
        desc: 'Drip conversions and weather-based scheduling target water precisely, cutting waste and monthly cost.',
      },
      {
        title: 'Conservation Compliance',
        desc: 'Systems designed around Calleguas-area expectations help you stay efficient during restrictions and dry years.',
      },
      {
        title: 'Healthier Plants & Lawns',
        desc: 'Proper coverage and zoning eliminate the dry spots and overwatering that stress plants and breed disease.',
      },
      {
        title: 'Set-and-Forget Convenience',
        desc: 'Smart controllers adjust automatically to weather, so you are not reprogramming a timer every season.',
      },
    ],
    process: [
      {
        title: 'System Inspection',
        desc: 'We run each zone, check coverage and pressure, and identify leaks, breaks, and inefficiencies.',
      },
      {
        title: 'Water Audit & Plan',
        desc: 'We map your zones to plant needs and recommend drip conversions, repairs, or a smart controller upgrade.',
      },
      {
        title: 'Installation or Repair',
        desc: 'We install or fix valves, lines, heads, drip, and controllers using quality, water-efficient components.',
      },
      {
        title: 'Programming & Testing',
        desc: 'We set efficient schedules by hydrozone, then test every zone to confirm coverage and no leaks.',
      },
    ],
    faqs: [
      {
        q: 'What are the current Calleguas water restrictions I should plan around?',
        a: 'Calleguas and its member agencies adjust watering-day and conservation rules based on supply conditions, so the specifics change over time. We design systems that perform well under tighter limits, with drip and smart scheduling so your landscape stays healthy even when watering windows shrink.',
      },
      {
        q: 'Are there rebates for smart controllers or drip irrigation?',
        a: 'Water-efficiency rebates for weather-based controllers, drip systems, and turf replacement are frequently available through regional water programs. We can point you toward current offerings and install equipment that qualifies.',
      },
      {
        q: 'Is drip really better than spray heads?',
        a: 'For shrub and planting beds, drip is dramatically more efficient because it delivers water directly to roots with little evaporation or overspray. Lawns still use rotors or sprays, but converting beds to drip is one of the biggest water savings available.',
      },
      {
        q: 'How much does a typical irrigation repair cost?',
        a: 'Simple fixes like a broken head or a stuck valve are modest; mainline breaks or full controller upgrades cost more. We diagnose first and give you a clear price before any work, so there are no surprises.',
      },
      {
        q: 'Can you add irrigation to a new drought-tolerant planting bed?',
        a: 'Yes. New native and low-water beds still need efficient establishment watering, and we install drip zoned specifically for drought-tolerant planting so it thrives without overwatering.',
      },
    ],
  },
  {
    slug: 'artificial-turf',
    name: 'Artificial Turf',
    navLabel: 'Artificial Turf',
    icon: '🌱',
    cardDescription:
      'HOA-approved, pet-friendly synthetic lawns that stay green year-round with zero mowing or watering.',
    h1: 'Artificial Turf Installation in Camarillo, CA',
    title: 'Artificial Turf Installation in Camarillo, CA | Low-Maintenance Lawns',
    metaDescription:
      'Premium artificial turf installation in Camarillo. HOA-approved options, water savings, and beautiful lawns year-round. Call 805-398-6469.',
    intro: [
      'Artificial turf has become one of the most popular water-wise upgrades in Camarillo, and for good reason. A quality synthetic lawn stays perfectly green through dry summers and water restrictions, eliminates mowing and fertilizing, and stands up to kids, pets, and play without turning into mud or dead patches.',
      'The key in Camarillo is choosing the right product and installing it correctly. Modern turf looks remarkably natural, and many local HOAs now permit it as a recognized water conservation measure, though most still review the specific product and the front-yard design. We help you select HOA-friendly turf and document it for approval.',
      'With Calleguas water costs and ongoing conservation pressure, turf pays off twice: a near-zero water bill for that area and a lawn that looks manicured every day of the year. We handle proper base preparation, drainage, and infill so your turf drains well, stays cool, and holds up for many years.',
    ],
    benefits: [
      {
        title: 'Dramatic Water Savings',
        desc: 'Eliminate irrigation for the lawn area entirely, a major win against Calleguas water costs and restrictions.',
      },
      {
        title: 'Green Every Single Day',
        desc: 'No brown dormancy, no dry-year stress, no patchy spots. Turf looks manicured year-round.',
      },
      {
        title: 'Pet & Kid Friendly',
        desc: 'Durable, drainable turf with pet-safe options handles play, paws, and traffic without wear or mud.',
      },
      {
        title: 'No-Mow Lifestyle',
        desc: 'Reclaim your weekends. No mowing, edging, fertilizing, or reseeding ever again.',
      },
    ],
    process: [
      {
        title: 'Consultation & Product Selection',
        desc: 'We measure the area and help you pick an HOA-friendly turf by blade style, color, and pile height.',
      },
      {
        title: 'Demolition & Grading',
        desc: 'We remove existing lawn, grade for drainage, and prepare the area for a stable base.',
      },
      {
        title: 'Base Installation',
        desc: 'A compacted aggregate base is built and leveled, the foundation for a flat, well-draining lawn.',
      },
      {
        title: 'Turf Install & Infill',
        desc: 'Turf is laid, seamed, secured, and brushed in with infill for a natural look and cool, springy feel.',
      },
    ],
    faqs: [
      {
        q: 'Will my Camarillo HOA allow artificial turf?',
        a: 'Many Camarillo-area HOAs now permit artificial turf as a water conservation measure, though most still review the specific product and front-yard design for a natural appearance. We help you select approved-style turf and prepare the submittal.',
      },
      {
        q: 'Does artificial turf get too hot in the summer?',
        a: 'Turf does warm in direct sun, but modern products use heat-reducing yarns and infill, and a quick rinse cools it quickly. Choosing a quality lighter-toned product and the right infill makes a noticeable difference in our climate.',
      },
      {
        q: 'Is it safe and clean for pets?',
        a: 'Yes. We install pet-friendly turf with excellent drainage and specialized infill that resists odor, so cleanup is simple and the surface stays sanitary.',
      },
      {
        q: 'How long does artificial turf last?',
        a: 'A professionally installed, quality turf typically lasts 15 to 20 years or more in Camarillo conditions, especially when the base is built correctly and the product carries a solid manufacturer warranty.',
      },
      {
        q: 'What does turf cost per square foot?',
        a: 'Installed cost depends on the product grade, site prep, and access, but turf is a one-time investment that replaces years of water bills, mowing, and reseeding. We provide a clear per-project quote after measuring.',
      },
    ],
  },
  {
    slug: 'landscape-lighting',
    name: 'Landscape Lighting',
    navLabel: 'Landscape Lighting',
    icon: '💡',
    cardDescription:
      'Low-voltage LED path, accent, and security lighting that makes your home shine after dark.',
    h1: 'Landscape Lighting in Camarillo, CA',
    title: 'Landscape Lighting in Camarillo, CA | Outdoor & Garden Lighting',
    metaDescription:
      'Professional landscape lighting in Camarillo. Path lights, accent lighting, and security lighting for Camarillo homes. Call 805-398-6469.',
    intro: [
      'Landscape lighting is the upgrade that doubles the value of everything else in your yard. The patio you built, the trees you love, the architecture of your Spanish-style home, all of it disappears at sunset unless it is lit well. A thoughtfully designed low-voltage system extends your curb appeal and your usable outdoor hours long after dark.',
      'In Camarillo, lighting also plays a practical role. Path and step lighting make walkways safe, and well-placed security lighting adds peace of mind in master-planned neighborhoods. The trick is balance: enough light to be safe and beautiful, without the glare that bothers neighbors or runs afoul of HOA guidelines.',
      'We design layered, low-voltage LED systems that uplight trees and architectural features, wash walls in warm light, define paths, and highlight your best landscaping. LED fixtures sip electricity, run cool, and last for years, so the effect is dramatic while the operating cost stays minimal.',
    ],
    benefits: [
      {
        title: 'Nighttime Curb Appeal',
        desc: 'Uplighting and architectural washing make your home a standout on the street after sunset.',
      },
      {
        title: 'Safety & Security',
        desc: 'Lit paths, steps, and entries prevent missteps and discourage unwanted visitors.',
      },
      {
        title: 'Extended Outdoor Hours',
        desc: 'Patios and gathering spaces become usable into the evening, year-round in our mild climate.',
      },
      {
        title: 'Energy-Efficient LED',
        desc: 'Low-voltage LED fixtures use minimal power, run cool, and last for many years.',
      },
    ],
    process: [
      {
        title: 'Evening Design Walk',
        desc: 'We assess the property and identify the features, paths, and entries worth lighting.',
      },
      {
        title: 'Lighting Plan',
        desc: 'We design a layered scheme balancing accent, path, and security lighting to HOA-friendly levels.',
      },
      {
        title: 'Fixture Installation',
        desc: 'We install quality low-voltage LED fixtures, transformer, and wiring cleanly and discreetly.',
      },
      {
        title: 'Aiming & Controls',
        desc: 'We fine-tune every fixture after dark and set timers or smart controls so it runs automatically.',
      },
    ],
    faqs: [
      {
        q: 'LED or halogen for landscape lighting?',
        a: 'LED, without question. Modern LED fixtures match the warm look of halogen while using a fraction of the energy, running far cooler, and lasting many times longer, which matters for fixtures buried in planting beds.',
      },
      {
        q: 'Should I use timers or smart controls?',
        a: 'Both work well. A simple photocell-and-timer setup is reliable and inexpensive, while smart controls let you adjust scenes and schedules from your phone. We will recommend based on how hands-on you want to be.',
      },
      {
        q: 'Are there HOA rules about outdoor lighting in Camarillo?',
        a: 'Many Camarillo HOAs have guidelines on brightness, color temperature, and avoiding light spill onto neighbors. We design warm, shielded, appropriately scaled lighting that looks elegant and stays within community standards.',
      },
      {
        q: 'How much does landscape lighting cost?',
        a: 'Cost scales with the number of fixtures and the complexity of the design. A focused front-yard accent package is very affordable, while a full property system is a larger investment. We quote by project after the design walk.',
      },
    ],
  },
  {
    slug: 'lawn-maintenance',
    name: 'Lawn Maintenance',
    navLabel: 'Lawn Maintenance',
    icon: '✂️',
    cardDescription:
      'Reliable mowing, pruning, fertilization, and HOA-standard upkeep on a schedule that fits you.',
    h1: 'Lawn & Yard Maintenance in Camarillo, CA',
    title: 'Lawn Maintenance in Camarillo, CA | Yard Care & Upkeep',
    metaDescription:
      'Professional lawn and yard maintenance in Camarillo. Mowing, pruning, fertilization, weed control, and HOA-standard upkeep. Call 805-398-6469.',
    intro: [
      'A beautiful landscape only stays beautiful with consistent care, and in Camarillo, consistent care often means HOA-standard care. Many communities expect lawns mowed, edges crisp, beds weeded, and shrubs shaped on a regular cadence. Our maintenance programs keep your property looking sharp and your HOA satisfied without you lifting a finger.',
      'We build maintenance around your property and your standards. That includes mowing and edging, pruning and shrub shaping, fertilization, weed control, and seasonal cleanups, all on a weekly or bi-weekly schedule that matches how your landscape actually grows through the Camarillo seasons.',
      'We serve individual homeowners who simply want their weekends back, as well as property managers and HOA communities that need dependable, professional crews holding common areas to a consistent standard. Either way, you get reliable service and a yard that always looks cared for.',
    ],
    benefits: [
      {
        title: 'Effortless HOA Compliance',
        desc: 'Regular, professional upkeep keeps your property meeting community standards with zero hassle.',
      },
      {
        title: 'Consistent Curb Appeal',
        desc: 'Crisp edges, healthy lawns, and shaped shrubs keep your home looking its best week after week.',
      },
      {
        title: 'Healthier Landscape',
        desc: 'Proper mowing height, fertilization, and weed control keep lawns and plants thriving long term.',
      },
      {
        title: 'Your Time Back',
        desc: 'Skip the weekend yard work and the equipment upkeep. We handle it on a schedule that suits you.',
      },
    ],
    process: [
      {
        title: 'Property Walkthrough',
        desc: 'We assess your landscape, discuss your standards or HOA requirements, and recommend a program.',
      },
      {
        title: 'Custom Service Plan',
        desc: 'We set a weekly or bi-weekly schedule with the right mix of mowing, pruning, and seasonal care.',
      },
      {
        title: 'Reliable Service Visits',
        desc: 'Our crew arrives on schedule, performs the agreed scope, and leaves the property clean.',
      },
      {
        title: 'Seasonal Adjustments',
        desc: 'We adapt the program through the year, adding cleanups, fertilization, and pruning as needed.',
      },
    ],
    faqs: [
      {
        q: 'Do you offer maintenance that meets HOA standards?',
        a: 'Yes. HOA-standard maintenance is a core part of what we do in Camarillo. We keep lawns, edges, beds, and shrubs to the consistent, tidy appearance community standards require, so you avoid compliance notices.',
      },
      {
        q: 'Weekly or bi-weekly service, which do I need?',
        a: 'It depends on your landscape and the season. Lawns in active growth and HOA front yards often warrant weekly service, while lower-maintenance or drought-tolerant yards do well bi-weekly. We will recommend the right cadence.',
      },
      {
        q: 'Do you work with property managers and HOA communities?',
        a: 'We do. We provide dependable, professional crews for HOA common areas and managed properties throughout the Camarillo area, with consistent standards and clear communication.',
      },
      {
        q: 'What seasonal services are included?',
        a: 'Beyond routine mowing and pruning, we handle seasonal cleanups, fertilization cycles, weed control, and adjusting irrigation schedules as the seasons change so the whole landscape stays healthy.',
      },
    ],
  },
  {
    slug: 'sod-installation',
    name: 'Sod Installation',
    navLabel: 'Sod Installation',
    icon: '🌾',
    cardDescription:
      'Fresh, instant lawns using the right grass varieties for Ventura County, properly prepped and graded.',
    h1: 'Sod Installation in Camarillo, CA',
    title: 'Sod Installation in Camarillo, CA | New Lawn Installation',
    metaDescription:
      "Professional sod installation in Camarillo, CA. The right grass varieties for Ventura County's climate, properly installed. Call 805-398-6469.",
    intro: [
      'When you want a real, living lawn and you want it now, sod is the answer. Instead of waiting months for seed to fill in, sod gives you an instant, established lawn in a single day. The difference between a lawn that thrives and one that struggles, though, comes down to choosing the right grass for Camarillo and preparing the soil correctly.',
      "Ventura County's climate suits several grass types. Tall fescue offers a soft, green, sun-and-shade-tolerant lawn that many Camarillo families love; Bermuda is tough and heat- and drought-resistant for full-sun, high-traffic yards; and Zoysia delivers a dense, low-water lawn that handles our summers well. We help you match variety to your light, use, and water goals.",
      'Great sod is mostly about what happens before the grass goes down. We grade for drainage, amend and prepare the soil, and install with tight seams, then set you up with a precise establishment watering schedule that respects Calleguas conservation while giving new roots what they need to take hold.',
    ],
    benefits: [
      {
        title: 'Instant, Usable Lawn',
        desc: 'Go from bare dirt to a full green lawn in a day, with no months-long wait for seed to fill in.',
      },
      {
        title: 'Right Grass for the Climate',
        desc: 'Variety chosen for your sun, traffic, and water goals so the lawn actually thrives in Camarillo.',
      },
      {
        title: 'Proper Soil Prep',
        desc: 'Grading, amending, and leveling done right, which is what separates a lasting lawn from a failing one.',
      },
      {
        title: 'Strong, Even Establishment',
        desc: 'Tight seams and a precise watering plan get roots locked in fast with no bare spots.',
      },
    ],
    process: [
      {
        title: 'Consultation & Variety Selection',
        desc: 'We assess sun, use, and water goals, then recommend the best grass variety for your yard.',
      },
      {
        title: 'Removal & Soil Prep',
        desc: 'We clear the area, grade for drainage, and amend and level the soil for a healthy root bed.',
      },
      {
        title: 'Sod Installation',
        desc: 'Fresh sod is laid with tight, staggered seams and rolled for solid soil contact.',
      },
      {
        title: 'Watering & Care Plan',
        desc: 'We set up your establishment watering schedule and give clear care guidance for the first weeks.',
      },
    ],
    faqs: [
      {
        q: 'What is the best grass for a Camarillo lawn?',
        a: 'It depends on your yard. Tall fescue is a popular all-around choice for its soft look and shade tolerance, Bermuda excels in full sun and high traffic, and Zoysia is a dense, lower-water option. We match the variety to your conditions.',
      },
      {
        q: 'How much does sod installation cost per square foot?',
        a: 'Installed cost depends on the grass variety, the amount of soil prep and grading needed, and site access. We measure and provide a clear per-project price before any work begins.',
      },
      {
        q: 'How long before I can walk and play on new sod?',
        a: 'Stay off new sod for about two weeks to let roots establish, then ease into light use. Full traffic and play are usually fine after three to four weeks, depending on the variety and weather.',
      },
      {
        q: 'How much water does new sod need given local restrictions?',
        a: 'New sod needs frequent watering for the first couple of weeks to establish, which is permitted as part of installation. After establishment, we taper to an efficient schedule that aligns with Calleguas conservation expectations.',
      },
    ],
  },
  {
    slug: 'outdoor-kitchens',
    name: 'Outdoor Kitchens',
    navLabel: 'Outdoor Kitchens',
    icon: '🍳',
    cardDescription:
      'Custom BBQ islands, built-in grills, bar seating, and full outdoor entertaining spaces.',
    h1: 'Outdoor Kitchens & BBQ Islands in Camarillo, CA',
    title: 'Outdoor Kitchens & BBQ Islands in Camarillo, CA',
    metaDescription:
      'Custom outdoor kitchens and BBQ islands in Camarillo. Built-in grills, countertops, bar seating, and full outdoor entertainment spaces. Call 805-398-6469.',
    intro: [
      "Camarillo's mild, sunny climate practically begs for outdoor living, and an outdoor kitchen is how you make the most of it. With comfortable weather most of the year, a built-in grill, prep counter, and bar seating turn your backyard into the spot where every gathering naturally ends up, no running back and forth to the indoor kitchen.",
      'We design and build custom BBQ islands and full outdoor kitchens around how you cook and entertain. That can mean a sleek built-in grill and counter for weeknight dinners, or a complete setup with side burners, refrigeration, a bar, and a pergola for hosting. Materials are chosen to complement your home and stand up to the elements.',
      "Larger lots in Las Posas Estates, Santa Rosa Valley, and Dos Vientos Ranch are especially well suited to full outdoor kitchen buildouts, often integrated with a paver patio, fire feature, and lighting into one cohesive outdoor room. Whatever your space, we handle the gas, the structure, and the finishes so it's built right and built to last.",
    ],
    benefits: [
      {
        title: 'Year-Round Entertaining',
        desc: "Camarillo's mild climate means an outdoor kitchen gets used in nearly every season.",
      },
      {
        title: 'A True Outdoor Room',
        desc: 'Pair the kitchen with patio, seating, and lighting for a space that rivals the indoor living area.',
      },
      {
        title: 'Adds Property Value',
        desc: 'A well-built outdoor kitchen is a premium feature that buyers in upscale Camarillo neighborhoods love.',
      },
      {
        title: 'Built Around You',
        desc: 'From a compact BBQ island to a full kitchen with bar and fridge, the design fits your cooking and space.',
      },
    ],
    process: [
      {
        title: 'Design Consultation',
        desc: 'We discuss how you cook and entertain, then design an island or kitchen layout to fit your space.',
      },
      {
        title: 'Materials & Appliances',
        desc: 'You select countertops, finishes, grill, and components that match your home and budget.',
      },
      {
        title: 'Site Prep & Utilities',
        desc: 'We prepare the base and run gas, electrical, and water as needed, handling permits where required.',
      },
      {
        title: 'Build & Finish',
        desc: 'We construct the island, set appliances and countertops, and finish to a clean, ready-to-use result.',
      },
    ],
    faqs: [
      {
        q: 'Do outdoor kitchens require permits in Camarillo?',
        a: 'Gas, electrical, and plumbing connections typically require City of Camarillo or County permits, and structures like attached pergolas may as well. We handle the permitting and inspections so your build is done to code.',
      },
      {
        q: 'Will my HOA approve an outdoor kitchen?',
        a: 'Backyard outdoor kitchens are generally well received, but HOAs may review anything visible, structures, and height. We prepare the documentation and select materials that align with community standards.',
      },
      {
        q: 'What countertop and cabinet materials hold up outdoors?',
        a: 'We use weather-resistant materials built for the outdoors, such as stone or porcelain countertops and stucco, stone-veneer, or stainless construction, so your kitchen looks great and resists sun and moisture for years.',
      },
      {
        q: 'Natural gas or propane for the grill?',
        a: 'Both work well. Natural gas means never refilling a tank but requires a gas line; propane offers flexibility and easier placement. We help you choose based on your yard layout and run the line if you go with natural gas.',
      },
      {
        q: 'What does an outdoor kitchen cost?',
        a: 'A simple BBQ island is an accessible project, while a full kitchen with premium appliances, refrigeration, and a bar is a larger investment. We design to your budget and provide a clear, itemized quote.',
      },
    ],
  },
];

export const serviceMap = Object.fromEntries(services.map((s) => [s.slug, s]));

export function relatedServices(slug: string, count = 3): Service[] {
  const others = services.filter((s) => s.slug !== slug);
  const start = services.findIndex((s) => s.slug === slug);
  const ordered = [...others.slice(start), ...others.slice(0, start)];
  return ordered.slice(0, count);
}
