import type { Faq } from './services';

export interface WhyPoint {
  title: string;
  desc: string;
}

export interface ServiceArea {
  name: string;
  /** H1 label, e.g. "Leisure Village, Camarillo" */
  displayName: string;
  slug: string;
  tagline: string;
  title: string;
  metaDescription: string;
  /** One specific sentence used in the hero */
  heroLine: string;
  intro: string[];
  /** Service slugs to feature for this area, framed in localNotes */
  topServices: string[];
  why: WhyPoint[];
  faqs: Faq[];
  /** Slugs of nearby areas */
  nearby: string[];
  closingLine: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Camarillo',
    displayName: 'Camarillo, CA',
    slug: 'camarillo',
    tagline: 'Our home base and the heart of everything we do.',
    title: 'Landscaping in Camarillo, CA | Camarillo Landscape Solutions',
    metaDescription:
      'Professional landscaping services in Camarillo, CA. Design, installation, hardscaping, irrigation, and maintenance for Camarillo homeowners and HOAs. Call 805-398-6469.',
    heroLine:
      'From Pleasant Valley to the newest master-planned tracts, Camarillo is where our crews work every single day.',
    intro: [
      "Camarillo is a master-planned community at heart, and it shows in everything from the Spanish-style architecture to the strong HOA culture and the genuine pride homeowners take in their streets. The city blends established neighborhoods around Pleasant Valley with newer developments, excellent schools, and a climate that lets landscapes look good year-round. That mix is exactly what we built this company to serve.",
      'As a local company, Camarillo Landscape Solutions knows what this city expects: clean, cohesive, HOA-compliant landscapes that hold up to our Mediterranean climate and respect Calleguas water realities. Whether you own a home in an established tract or a newer master-planned neighborhood, we deliver design, installation, hardscaping, irrigation, and maintenance that fits right in.',
    ],
    topServices: [
      'landscape-design',
      'hardscaping',
      'irrigation',
      'artificial-turf',
      'landscape-lighting',
      'lawn-maintenance',
      'sod-installation',
      'outdoor-kitchens',
    ],
    why: [
      {
        title: 'Deep Local Knowledge',
        desc: 'We work across every Camarillo neighborhood and know the architecture, soils, and HOA expectations block by block.',
      },
      {
        title: 'HOA-Fluent Crews',
        desc: 'We prepare submittals the way Camarillo architectural committees expect and build to approved standards.',
      },
      {
        title: 'Water-Wise by Default',
        desc: 'Every project is designed around Calleguas conservation, from drip irrigation to drought-tolerant planting.',
      },
    ],
    faqs: [
      {
        q: 'Do you serve all of Camarillo and its neighborhoods?',
        a: 'Yes. We serve the entire Camarillo area including Mission Oaks, Leisure Village, Springville, Las Posas Estates, Calleguas, Camarillo Heights, and the surrounding communities of Somis, Santa Rosa Valley, and Dos Vientos Ranch.',
      },
      {
        q: 'Are you familiar with Camarillo HOA requirements?',
        a: 'Very. Most Camarillo neighborhoods have active HOAs with architectural review, and we routinely prepare compliant plans and documentation to get projects approved smoothly.',
      },
      {
        q: 'How does Calleguas water service affect my landscape choices?',
        a: 'Camarillo is served through the Calleguas Municipal Water District, so we design for efficiency: drip irrigation, smart controllers, and drought-tolerant or turf-alternative options that stay attractive under conservation rules.',
      },
      {
        q: 'Do you offer free estimates in Camarillo?',
        a: 'Always. We provide free, no-obligation estimates throughout Camarillo. Call 805-398-6469 to schedule a visit.',
      },
    ],
    nearby: ['mission-oaks', 'springville', 'calleguas', 'camarillo-heights'],
    closingLine:
      'Whatever your Camarillo property needs, from a front-yard refresh to a full outdoor living buildout, we are your local team.',
  },
  {
    name: 'Mission Oaks',
    displayName: 'Mission Oaks, CA',
    slug: 'mission-oaks',
    tagline: 'Established, family-friendly, and ready for a refresh.',
    title: 'Landscaping in Mission Oaks, CA | Camarillo Landscape Solutions',
    metaDescription:
      'Landscaping services in Mission Oaks, CA. Lawn care, irrigation upgrades, and backyard transformations for this established Camarillo community. Call 805-398-6469.',
    heroLine:
      'Mission Oaks homes have great bones, and many are ready for an irrigation upgrade or a backyard reimagining.',
    intro: [
      'Just north of central Camarillo, Mission Oaks is an established, unincorporated community with a comfortable suburban feel and a strong family orientation. Homes here span a range of sizes and ages, some with HOA oversight and many without, and a lot of them are reaching the point where the original landscaping and irrigation are due for an update.',
      'That makes Mission Oaks one of our most active areas for lawn care programs, irrigation modernization, and full backyard transformations. We help longtime owners refresh tired front yards for better curb appeal and help newer owners turn dated backyards into spaces the whole family actually uses.',
    ],
    topServices: ['lawn-maintenance', 'irrigation', 'landscape-design', 'hardscaping', 'sod-installation', 'artificial-turf'],
    why: [
      {
        title: 'Refresh Specialists',
        desc: 'We are experts at modernizing the aging lawns and irrigation common in established Mission Oaks homes.',
      },
      {
        title: 'Family-Focused Yards',
        desc: 'We design durable, usable backyards that hold up to kids, pets, and everyday family life.',
      },
      {
        title: 'Honest Local Service',
        desc: 'Straightforward estimates and reliable crews from a company based right here in the Camarillo area.',
      },
    ],
    faqs: [
      {
        q: 'My Mission Oaks irrigation is old. Repair or replace?',
        a: 'It depends on the condition. Failing valves, cracked lines, and inefficient spray heads are often worth replacing with a modern drip-and-smart-controller setup that pays for itself in water savings. We inspect and give you an honest recommendation.',
      },
      {
        q: 'Does Mission Oaks have HOA landscaping rules?',
        a: 'Parts of Mission Oaks have HOAs and parts do not. We confirm whether your specific tract has architectural requirements and design accordingly.',
      },
      {
        q: 'Can you transform an outdated Mission Oaks backyard?',
        a: 'Absolutely. Backyard transformations, new patios, turf or sod, refreshed planting, and lighting, are one of our most popular services in this community.',
      },
      {
        q: 'Do you offer ongoing maintenance in Mission Oaks?',
        a: 'Yes, weekly and bi-weekly maintenance programs are available throughout Mission Oaks for homeowners who want a consistently sharp-looking yard.',
      },
    ],
    nearby: ['camarillo', 'springville', 'calleguas', 'camarillo-heights'],
    closingLine: 'Ready to refresh your Mission Oaks home? We make it easy.',
  },
  {
    name: 'Leisure Village',
    displayName: 'Leisure Village, Camarillo',
    slug: 'leisure-village',
    tagline: 'Beautiful yards without the upkeep, for an active adult lifestyle.',
    title: 'Landscaping in Leisure Village Camarillo | Camarillo Landscape Solutions',
    metaDescription:
      'Low-maintenance landscaping for Leisure Village, Camarillo. Drought-tolerant designs, artificial turf, and maintenance for this 55+ community. Call 805-398-6469.',
    heroLine:
      'In Leisure Village, the goal is a gorgeous yard you enjoy, not one you have to work for.',
    intro: [
      'Leisure Village is a gated active adult (55+) community in Camarillo, and life here moves at a more relaxed pace. Residents want attractive, welcoming outdoor spaces, but the last thing anyone wants is a high-maintenance yard. With HOA-managed landscaping in common areas and individual preferences inside private spaces, the priority is beauty with minimal upkeep.',
      'That is exactly the brief we love. For Leisure Village homeowners we focus on low-maintenance, drought-tolerant designs, artificial turf, and simple maintenance programs that keep things looking immaculate without demanding your time, your back, or a big water bill. Everything we recommend is chosen so you can enjoy your yard rather than tend it.',
    ],
    topServices: ['artificial-turf', 'landscape-design', 'lawn-maintenance', 'irrigation', 'landscape-lighting', 'hardscaping'],
    why: [
      {
        title: 'Low-Maintenance Experts',
        desc: 'We specialize in designs that look full and polished while requiring almost no ongoing work.',
      },
      {
        title: 'Water-Wise & Easy',
        desc: 'Drought-tolerant planting and artificial turf cut both upkeep and water costs to a minimum.',
      },
      {
        title: 'Respectful, Tidy Crews',
        desc: 'Courteous, clean, and considerate service that fits the calm character of the community.',
      },
    ],
    faqs: [
      {
        q: 'Is artificial turf a good fit for Leisure Village?',
        a: 'It is one of the best choices here. Turf stays green with zero mowing or watering, which is ideal for residents who want a beautiful lawn without the maintenance. We help confirm it fits community guidelines.',
      },
      {
        q: 'Can you work within the HOA-managed landscaping here?',
        a: 'Yes. We focus on the areas residents control and coordinate with community standards so your private space complements the managed common areas.',
      },
      {
        q: 'What is the lowest-maintenance design option?',
        a: 'A combination of artificial turf, drought-tolerant plants on drip irrigation, and clean hardscape gives you a polished look with minimal upkeep and very little watering.',
      },
      {
        q: 'Do you offer simple maintenance visits for smaller yards?',
        a: 'We do. We tailor right-sized maintenance programs for the more compact, manageable yards typical of Leisure Village.',
      },
    ],
    nearby: ['camarillo', 'mission-oaks', 'springville', 'calleguas'],
    closingLine: 'Enjoy your time in Leisure Village while we keep your yard effortless.',
  },
  {
    name: 'Springville',
    displayName: 'Springville, Camarillo',
    slug: 'springville',
    tagline: 'Newer homes ready for that first real backyard upgrade.',
    title: 'Landscaping in Springville Camarillo | Camarillo Landscape Solutions',
    metaDescription:
      'Landscaping in Springville, Camarillo. Backyard upgrades, turf, paver patios, and irrigation for this newer master-planned neighborhood. Call 805-398-6469.',
    heroLine:
      'Springville backyards often start as a blank slate, and that is the fun part.',
    intro: [
      'Springville is one of Camarillo\'s newer master-planned neighborhoods, popular with younger families drawn to fresh construction and a tidy, modern community feel. The homes are newer, which usually means the landscaping is too: builder-grade front yards and backyards that are essentially a clean slate waiting for the owner\'s vision.',
      'That makes Springville a hotspot for first-time backyard buildouts. We help new homeowners turn empty yards into finished outdoor spaces with paver patios, artificial turf, fresh planting, and proper irrigation, all designed to satisfy the neighborhood\'s newer, often stricter HOA standards while reflecting your style.',
    ],
    topServices: ['hardscaping', 'artificial-turf', 'irrigation', 'landscape-design', 'sod-installation', 'landscape-lighting'],
    why: [
      {
        title: 'Blank-Slate Builders',
        desc: 'We turn empty builder backyards into complete, finished outdoor spaces in one coordinated project.',
      },
      {
        title: 'New-HOA Savvy',
        desc: 'Newer neighborhoods often have detailed guidelines; we know how to design and document for approval.',
      },
      {
        title: 'Value-Building Upgrades',
        desc: 'Patios, turf, and planting add real equity and livability to a newer Springville home.',
      },
    ],
    faqs: [
      {
        q: 'My Springville backyard is just dirt. Where do I start?',
        a: 'Start with a plan. We design the whole space first, patio, turf or planting, irrigation, and lighting, so it comes together cohesively, then build it in one project or in phases that fit your budget.',
      },
      {
        q: 'Will the Springville HOA approve a paver patio and turf?',
        a: 'Generally yes, within guidelines. Newer Camarillo HOAs often have specific material and design standards, and we prepare compliant plans and submittals to keep approval smooth.',
      },
      {
        q: 'How long does a full backyard buildout take?',
        a: 'A typical new-backyard project runs a few weeks from start to finish depending on scope, materials, and any HOA approval timelines. We give you a clear schedule up front.',
      },
      {
        q: 'Can you install irrigation before I plant?',
        a: 'Yes, and we recommend it. Installing efficient drip and lawn irrigation as part of the build ensures everything is watered correctly from day one.',
      },
    ],
    nearby: ['camarillo', 'mission-oaks', 'leisure-village', 'calleguas'],
    closingLine: 'Let\'s turn your Springville backyard into something special.',
  },
  {
    name: 'Las Posas Estates',
    displayName: 'Las Posas Estates, Camarillo',
    slug: 'las-posas-estates',
    tagline: 'Estate-caliber landscaping for Camarillo\'s premium lots.',
    title: 'Landscaping in Las Posas Estates | Camarillo Landscape Solutions',
    metaDescription:
      'Luxury landscaping in Las Posas Estates, Camarillo. Custom design, high-end hardscaping, outdoor kitchens, and lighting for larger estate lots. Call 805-398-6469.',
    heroLine:
      'Larger lots, custom homes, and high expectations. Las Posas Estates is the premium end of Camarillo, and we treat it that way.',
    intro: [
      'Las Posas Estates is one of Camarillo\'s most prestigious communities: larger lots, custom estate homes, long driveways, mature trees, and the kind of refined curb appeal that sets a high bar. Homeowners here expect landscaping that matches the caliber of the architecture, and the generous lot sizes open the door to ambitious outdoor living.',
      'This is where we bring our full design/build capabilities. For Las Posas Estates, that means custom landscape design, high-end hardscaping, outdoor kitchens, sophisticated landscape lighting, and estate-grade planting, all executed with the materials and craftsmanship a property at this level deserves. We approach every project as a long-term investment in a signature property.',
    ],
    topServices: ['landscape-design', 'outdoor-kitchens', 'hardscaping', 'landscape-lighting', 'irrigation', 'artificial-turf'],
    why: [
      {
        title: 'Premium Craftsmanship',
        desc: 'High-end materials, precise installation, and an eye for detail that suits estate-caliber properties.',
      },
      {
        title: 'Full Design/Build',
        desc: 'We handle ambitious, multi-element projects, design, hardscape, kitchens, lighting, as one cohesive vision.',
      },
      {
        title: 'Discreet, Professional Service',
        desc: 'Respectful crews, clean job sites, and clear communication throughout a larger project.',
      },
    ],
    faqs: [
      {
        q: 'Do you handle large, multi-phase estate projects?',
        a: 'Yes. Larger Las Posas Estates lots often warrant comprehensive design/build, combining hardscape, an outdoor kitchen, lighting, and planting. We can deliver it all at once or in coordinated phases.',
      },
      {
        q: 'Can you design around mature trees and long driveways?',
        a: 'Absolutely. We protect and showcase mature trees, enhance driveway approaches, and design planting that complements the established character of these estate lots.',
      },
      {
        q: 'What sets an estate-level installation apart?',
        a: 'Material quality, engineering, and finish detail. From premium pavers and stone to professionally aimed lighting and properly engineered features, the difference is in craftsmanship that lasts.',
      },
      {
        q: 'Is HOA approval still required in Las Posas Estates?',
        a: 'Depending on the specific section, architectural review may apply. We prepare the detailed plans these projects warrant and handle any required approvals.',
      },
    ],
    nearby: ['camarillo', 'santa-rosa-valley', 'camarillo-heights', 'somis'],
    closingLine: 'For estate properties that deserve the best, let\'s create something exceptional.',
  },
  {
    name: 'Somis',
    displayName: 'Somis, CA',
    slug: 'somis',
    tagline: 'Rural character, larger lots, and water-smart landscaping.',
    title: 'Landscaping in Somis, CA | Camarillo Landscape Solutions',
    metaDescription:
      'Landscaping in Somis, CA. Drought-tolerant designs, water-efficient irrigation, and low-maintenance landscaping for rural and larger-lot properties. Call 805-398-6469.',
    heroLine:
      'Surrounded by avocado and citrus groves, Somis calls for landscaping that respects its rural roots.',
    intro: [
      'Somis is a small, unincorporated agricultural community tucked between Camarillo and Santa Paula, known for its avocado and citrus groves and its genuinely rural character. Properties here tend toward larger lots, and many sit adjacent to working agricultural land, which gives the area a relaxed, open feel quite different from Camarillo\'s tract neighborhoods.',
      'Landscaping in Somis works best when it leans into that setting. We focus on drought-tolerant and native planting, water-efficient irrigation that respects the realities of rural water use, and low-maintenance designs that suit larger properties without becoming a chore. The result complements the surrounding groves and open country rather than fighting it.',
    ],
    topServices: ['landscape-design', 'irrigation', 'artificial-turf', 'hardscaping', 'lawn-maintenance', 'landscape-lighting'],
    why: [
      {
        title: 'Rural-Property Experience',
        desc: 'We understand larger, agricultural-adjacent lots and design landscaping that fits the rural setting.',
      },
      {
        title: 'Water-Efficient Focus',
        desc: 'Drought-tolerant planting and efficient irrigation keep larger Somis properties beautiful and economical.',
      },
      {
        title: 'Low-Maintenance Designs',
        desc: 'We create attractive landscapes that do not demand constant attention across a bigger property.',
      },
    ],
    faqs: [
      {
        q: 'What landscaping suits a larger rural Somis lot?',
        a: 'Drought-tolerant and native planting, efficient drip irrigation, decorative rock, and defined usable zones near the home work beautifully on larger rural lots, keeping things attractive and manageable.',
      },
      {
        q: 'Can you handle water-efficient irrigation for big properties?',
        a: 'Yes. We design zoned, efficient irrigation that delivers water precisely where it is needed, which matters even more on the larger lots common in Somis.',
      },
      {
        q: 'Do you travel to Somis from Camarillo?',
        a: 'Of course. Somis is right in our service area, just minutes from Camarillo, and we regularly serve properties throughout the community.',
      },
      {
        q: 'Can landscaping complement nearby groves and open land?',
        a: 'Definitely. We favor naturalistic, drought-tolerant designs and native plants that blend with the agricultural surroundings rather than clashing with them.',
      },
    ],
    nearby: ['camarillo', 'las-posas-estates', 'santa-rosa-valley', 'camarillo-heights'],
    closingLine: 'Water-smart landscaping that suits the Somis way of life.',
  },
  {
    name: 'Santa Rosa Valley',
    displayName: 'Santa Rosa Valley, CA',
    slug: 'santa-rosa-valley',
    tagline: 'Estate and equestrian properties that call for design/build at its best.',
    title: 'Landscaping in Santa Rosa Valley, CA | Camarillo Landscape Solutions',
    metaDescription:
      'Luxury landscaping in Santa Rosa Valley, CA. Full design/build, outdoor kitchens, landscape lighting, and hardscaping for estate and horse properties. Call 805-398-6469.',
    heroLine:
      'Horse properties, large estate lots, and custom homes. Santa Rosa Valley is built for ambitious outdoor living.',
    intro: [
      'Santa Rosa Valley is an affluent, semi-rural community near Moorpark, defined by horse properties, large estate lots, and custom homes set against open hillsides. There is plenty of room here, and homeowners tend to have high expectations for landscaping that matches their custom residences and the natural beauty of the valley.',
      'This is prime territory for full design/build projects. For Santa Rosa Valley we deliver comprehensive landscape design, luxury hardscaping, outdoor kitchens, and sophisticated landscape lighting, often integrating large usable outdoor living areas with the surrounding semi-rural setting. We design at the scale and quality these distinctive properties deserve.',
    ],
    topServices: ['landscape-design', 'outdoor-kitchens', 'landscape-lighting', 'hardscaping', 'irrigation', 'artificial-turf'],
    why: [
      {
        title: 'Estate-Scale Design',
        desc: 'We plan and build comprehensive outdoor environments suited to large semi-rural properties.',
      },
      {
        title: 'Luxury Outdoor Living',
        desc: 'Outdoor kitchens, premium hardscape, and lighting that turn big lots into resort-style spaces.',
      },
      {
        title: 'Sensitive to the Setting',
        desc: 'Designs that respect horse properties, open land, and the valley\'s natural character.',
      },
    ],
    faqs: [
      {
        q: 'Do you work on horse and equestrian properties?',
        a: 'Yes. We design landscaping that works around equestrian use and larger acreage, focusing the polished, high-design elements where you live and entertain.',
      },
      {
        q: 'Can you build a complete outdoor living space here?',
        a: 'Absolutely. Santa Rosa Valley lots are ideal for full outdoor living, an outdoor kitchen, patio, fire feature, and lighting integrated into one cohesive design.',
      },
      {
        q: 'How do you handle the larger scale of these lots?',
        a: 'We design intentional, usable zones rather than trying to manicure every square foot, blending high-design areas near the home with low-maintenance, water-wise treatments elsewhere.',
      },
      {
        q: 'Are permits more involved for semi-rural properties?',
        a: 'They can be, given county jurisdiction and the scope of larger projects. We handle permitting and design to the applicable standards.',
      },
    ],
    nearby: ['camarillo', 'las-posas-estates', 'somis', 'dos-vientos-ranch'],
    closingLine: 'Let\'s create luxury outdoor living worthy of Santa Rosa Valley.',
  },
  {
    name: 'Calleguas',
    displayName: 'Calleguas, Camarillo',
    slug: 'calleguas',
    tagline: 'Suburban Camarillo living with a focus on water-wise upgrades.',
    title: 'Landscaping in Calleguas Camarillo | Camarillo Landscape Solutions',
    metaDescription:
      'Landscaping in the Calleguas area of Camarillo. Maintenance programs, irrigation upgrades, and water-wise curb appeal improvements. Call 805-398-6469.',
    heroLine:
      'Right in the Calleguas Municipal Water District, this is where smart irrigation really pays off.',
    intro: [
      'The Calleguas area is classic suburban Camarillo: standard single-family homes, family-oriented streets, and HOA oversight in some developments. It is a comfortable, well-kept part of the city where homeowners value tidy curb appeal and dependable upkeep, and where the name itself is a reminder of the water district that shapes how we all landscape here.',
      'Because this area sits squarely within the Calleguas Municipal Water District service area, water efficiency is front and center. We focus on maintenance programs that keep yards looking sharp, irrigation upgrades that cut water use, and curb-appeal improvements, drought-tolerant planting, turf alternatives, and refreshed front yards, that look great while keeping monthly costs in check.',
    ],
    topServices: ['lawn-maintenance', 'irrigation', 'artificial-turf', 'landscape-design', 'sod-installation', 'hardscaping'],
    why: [
      {
        title: 'Water-District Savvy',
        desc: 'We design every system around Calleguas conservation, so your landscape stays efficient and compliant.',
      },
      {
        title: 'Curb-Appeal Upgrades',
        desc: 'Front-yard refreshes and turf alternatives that boost appearance and lower water use.',
      },
      {
        title: 'Reliable Maintenance',
        desc: 'Consistent, professional upkeep that keeps suburban Calleguas-area yards looking their best.',
      },
    ],
    faqs: [
      {
        q: 'How does the Calleguas water district affect my watering?',
        a: 'The Calleguas Municipal Water District and its member agencies set conservation expectations that can tighten in dry years. We design efficient drip and smart-controller systems so your landscape stays healthy within those limits.',
      },
      {
        q: 'What is the best way to cut my water bill here?',
        a: 'Converting spray zones to drip, upgrading to a weather-based smart controller, and replacing thirsty lawn with drought-tolerant planting or turf are the highest-impact changes for most Calleguas-area homes.',
      },
      {
        q: 'Do you offer regular maintenance in this area?',
        a: 'Yes. Weekly and bi-weekly maintenance programs are popular here, keeping suburban front and back yards consistently neat and HOA-friendly.',
      },
      {
        q: 'Are there rebates for water-wise upgrades?',
        a: 'Regional water-efficiency rebates for smart controllers, drip, and turf replacement are frequently available. We can point you to current programs and install qualifying equipment.',
      },
    ],
    nearby: ['camarillo', 'mission-oaks', 'springville', 'leisure-village'],
    closingLine: 'Smart, water-wise landscaping for the Calleguas area of Camarillo.',
  },
  {
    name: 'Dos Vientos Ranch',
    displayName: 'Dos Vientos Ranch, CA',
    slug: 'dos-vientos-ranch',
    tagline: 'Upscale master-planned living with strict HOA standards we know well.',
    title: 'Landscaping in Dos Vientos Ranch | Camarillo Landscape Solutions',
    metaDescription:
      'Landscaping in Dos Vientos Ranch, CA. Backyard transformations, turf, paver patios, and lighting with HOA-compliant design. Call 805-398-6469.',
    heroLine:
      'Newer upscale homes, community trails, and strict HOA guidelines. We know the Dos Vientos standard.',
    intro: [
      'Dos Vientos Ranch is a newer, upscale master-planned community on the Camarillo and Newbury Park border, built around open space, community trails, and a strong sense of order. It draws families and professionals who appreciate well-kept newer homes and a community that takes its appearance seriously, which means an HOA with detailed, firmly enforced guidelines.',
      'We know that standard well. For Dos Vientos Ranch homeowners we deliver backyard transformations, artificial turf, paver patios, and landscape lighting, all designed and documented to satisfy the community\'s strict architectural requirements the first time. Our familiarity with Dos Vientos HOA expectations means a smoother approval process and a finished project that fits right in.',
    ],
    topServices: ['hardscaping', 'artificial-turf', 'landscape-lighting', 'landscape-design', 'irrigation', 'sod-installation'],
    why: [
      {
        title: 'Dos Vientos HOA Familiarity',
        desc: 'We know the community\'s strict guidelines and design and document projects to earn approval.',
      },
      {
        title: 'Upscale Backyard Builds',
        desc: 'Patios, turf, and lighting that match the quality buyers expect in this master-planned community.',
      },
      {
        title: 'Smooth Approvals',
        desc: 'Compliant plans and clear submittals mean less back-and-forth with the architectural committee.',
      },
    ],
    faqs: [
      {
        q: 'Do you know the Dos Vientos HOA requirements?',
        a: 'Yes. Dos Vientos Ranch is known for strict, detailed architectural guidelines, and we design and prepare submittals specifically to meet them, which speeds approval and avoids rework.',
      },
      {
        q: 'What backyard upgrades are most popular here?',
        a: 'Paver patios, artificial turf, refreshed planting, and landscape lighting are the most requested, often combined into a complete backyard transformation.',
      },
      {
        q: 'How long does HOA approval take in Dos Vientos?',
        a: 'It depends on the committee\'s schedule, but submitting complete, compliant plans the first time is the best way to keep it on the shorter end. We handle that for you.',
      },
      {
        q: 'Is artificial turf allowed in Dos Vientos Ranch?',
        a: 'Turf is often permitted as a water-wise option subject to product and design review. We help select an approved-style turf and prepare the documentation the HOA expects.',
      },
    ],
    nearby: ['camarillo', 'santa-rosa-valley', 'las-posas-estates', 'camarillo-heights'],
    closingLine: 'HOA-ready landscaping that meets the Dos Vientos Ranch standard.',
  },
  {
    name: 'Camarillo Heights',
    displayName: 'Camarillo Heights, CA',
    slug: 'camarillo-heights',
    tagline: 'Hillside lots, views, and the retaining work to make them shine.',
    title: 'Landscaping in Camarillo Heights, CA | Camarillo Landscape Solutions',
    metaDescription:
      'Landscaping in Camarillo Heights, CA. Retaining walls, slope stabilization, drought-tolerant hillside design, and native planting for elevated lots. Call 805-398-6469.',
    heroLine:
      'Elevated lots with views bring unique challenges, and slopes and retaining walls are our specialty here.',
    intro: [
      'Camarillo Heights sits above the valley floor, a hillside community of elevated lots, sweeping views, and larger parcels where older established homes mix with newer custom builds. The setting is gorgeous, but it comes with real landscaping challenges: slopes, grade changes, drainage, and the need to make terraced or hillside yards both beautiful and stable.',
      'That is right in our wheelhouse. In Camarillo Heights we specialize in retaining walls and slope stabilization, paired with drought-tolerant hillside landscaping, decorative rock, and California native planting that thrives on slopes while controlling erosion. The goal is to turn challenging terrain into usable, low-water, view-enhancing outdoor space.',
    ],
    topServices: ['hardscaping', 'landscape-design', 'irrigation', 'artificial-turf', 'landscape-lighting', 'lawn-maintenance'],
    why: [
      {
        title: 'Slope & Retaining Specialists',
        desc: 'We engineer retaining walls and slope solutions with proper drainage for elevated Heights lots.',
      },
      {
        title: 'View-Focused Design',
        desc: 'We design hillside landscapes that protect and frame the views these properties are prized for.',
      },
      {
        title: 'Drought-Tolerant Hillsides',
        desc: 'Native and low-water planting plus decorative rock control erosion and conserve water on slopes.',
      },
    ],
    faqs: [
      {
        q: 'Can you build retaining walls for my hillside lot?',
        a: 'Yes, retaining walls and slope stabilization are a specialty of ours in Camarillo Heights. We engineer walls with proper drainage and reinforcement to hold up on elevated, sloped parcels.',
      },
      {
        q: 'What landscaping works best on a slope?',
        a: 'Drought-tolerant and native plants with strong root systems, combined with decorative rock and efficient drip irrigation, control erosion beautifully while keeping water use low on hillside lots.',
      },
      {
        q: 'Do hillside retaining walls require permits?',
        a: 'Walls over a certain height and anything affecting grading or drainage typically require permits. We assess your site and handle the permitting and engineering where it applies.',
      },
      {
        q: 'Can you design around my views?',
        a: 'Absolutely. We plan planting heights and layouts to preserve and frame your views rather than block them, which is a key consideration for Camarillo Heights properties.',
      },
    ],
    nearby: ['camarillo', 'mission-oaks', 'las-posas-estates', 'somis'],
    closingLine: 'Turn your Camarillo Heights slope into stable, beautiful, view-friendly outdoor space.',
  },
];

export const serviceAreaMap = Object.fromEntries(serviceAreas.map((a) => [a.slug, a]));
