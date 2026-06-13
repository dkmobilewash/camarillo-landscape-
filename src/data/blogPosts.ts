export type Section =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  readTime: string;
  content: Section[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'drought-tolerant-landscaping-camarillo',
    title: 'Drought-Tolerant Landscaping in Camarillo: A Practical Guide',
    excerpt:
      'How to build a water-wise yard that still looks lush, stays HOA-compliant, and cuts your Calleguas water bill.',
    date: '2026-05-28',
    tag: 'Water-Wise',
    readTime: '7 min read',
    content: [
      {
        type: 'p',
        text: 'Drought-tolerant does not have to mean a yard full of gravel and three sad cacti. In Camarillo, where the Calleguas Municipal Water District shapes how we all water, the smartest yards look full and intentional while using a fraction of the water of a traditional lawn. Here is how we approach it.',
      },
      { type: 'h2', text: 'Start With Hydrozones' },
      {
        type: 'p',
        text: 'The single biggest mistake in water-wise design is mixing thirsty and dry plants on the same irrigation valve. Group plants by water need, called hydrozoning, so each zone gets exactly what it requires. A thoughtful plan might have a small accent zone with moderate water near the entry and broad low-water zones everywhere else.',
      },
      { type: 'h2', text: 'Plants That Thrive Here' },
      {
        type: 'p',
        text: 'Camarillo\'s Mediterranean climate is ideal for California natives and low-water Mediterranean plants. A few reliable performers:',
      },
      {
        type: 'ul',
        items: [
          'Cleveland sage and other salvias for color and pollinators',
          'Manzanita and ceanothus (California lilac) as structural shrubs',
          'Westringia and germander for clean, hedge-like form',
          'Kangaroo paw, agave, and ornamental grasses for texture',
          'Lantana and rockrose for tough, long-blooming color',
        ],
      },
      { type: 'h2', text: 'Keep It HOA-Friendly' },
      {
        type: 'p',
        text: 'Most Camarillo HOAs welcome drought-tolerant designs, but they still review front yards for a polished, intentional look. Define beds with clean edges, use quality mulch or decorative rock, and avoid the bare-dirt-and-weeds look that gives water-wise yards a bad name.',
      },
      {
        type: 'callout',
        text: 'A drip-irrigated, well-mulched native bed can use up to 70% less water than the lawn it replaces, while looking far more interesting.',
      },
      { type: 'h2', text: 'The Bottom Line' },
      {
        type: 'p',
        text: 'Done right, a drought-tolerant Camarillo yard is lower-maintenance, lower-cost, and more beautiful than the lawn it replaces. The key is a real plan: hydrozones, the right plants, efficient drip, and clean design. That is exactly where a professional design pays for itself.',
      },
    ],
  },
  {
    slug: 'artificial-turf-vs-natural-grass-camarillo',
    title: 'Artificial Turf vs. Natural Grass in Camarillo: Which Is Right for You?',
    excerpt:
      'A side-by-side look at cost, maintenance, water savings, and HOA rules to help you decide.',
    date: '2026-05-12',
    tag: 'Lawns',
    readTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'It is one of the most common questions we get in Camarillo: should I keep a real lawn or switch to artificial turf? Both can be the right call depending on your priorities. Here is an honest comparison.',
      },
      { type: 'h2', text: 'Water and Cost Over Time' },
      {
        type: 'p',
        text: 'Natural grass is cheaper to install but costs you every month in water, mowing, and fertilizer, especially under Calleguas water rates. Turf costs more up front but eliminates lawn watering entirely and erases mowing for 15 to 20 years. Over its lifespan, turf often comes out ahead.',
      },
      { type: 'h2', text: 'Maintenance Reality' },
      {
        type: 'ul',
        items: [
          'Natural grass: weekly mowing, edging, fertilizing, reseeding bare spots, and irrigation upkeep.',
          'Artificial turf: an occasional rinse, brushing high-traffic areas, and clearing debris. That is essentially it.',
        ],
      },
      { type: 'h2', text: 'The Feel and Look' },
      {
        type: 'p',
        text: 'Modern turf looks remarkably natural, but a healthy real lawn still has an unmatched soft, cool feel underfoot. If you love mowing stripes into a fescue lawn, natural grass has an appeal turf cannot replicate. If you want green-every-day with no effort, turf wins.',
      },
      { type: 'h2', text: 'HOA Considerations' },
      {
        type: 'p',
        text: 'Many Camarillo HOAs now allow turf as a water conservation measure, but most review the specific product and front-yard design. Newer communities like Dos Vientos Ranch tend to be stricter. Always confirm before you install, and choose a natural-looking product.',
      },
      {
        type: 'callout',
        text: 'Our rule of thumb: choose turf for high-traffic, hard-to-water, or pet areas; keep natural grass only where you genuinely enjoy a living lawn and will maintain it.',
      },
      { type: 'h2', text: 'Still Not Sure?' },
      {
        type: 'p',
        text: 'We are happy to walk your yard and give a straight recommendation based on your use, budget, and HOA. Sometimes the best answer is a mix: turf in the play zone, drought-tolerant beds elsewhere.',
      },
    ],
  },
  {
    slug: 'paver-patio-cost-camarillo',
    title: 'What Does a Paver Patio Cost in Camarillo? Factors That Move the Price',
    excerpt:
      'Pavers vs. concrete, what drives cost, and how to budget for a patio that lasts decades.',
    date: '2026-04-22',
    tag: 'Hardscaping',
    readTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'A paver patio is one of the best investments you can make in a Camarillo backyard, but pricing can feel like a mystery. Let us break down what actually drives the cost so you can budget realistically.',
      },
      { type: 'h2', text: 'Pavers vs. Poured Concrete' },
      {
        type: 'p',
        text: 'Concrete is usually cheaper up front for a large flat slab. Pavers cost more but flex with ground movement instead of cracking, can be lifted and reset, and offer far more color and pattern options to match Spanish-style homes. For most Camarillo patios, pavers are the better long-term value.',
      },
      { type: 'h2', text: 'What Drives Paver Cost' },
      {
        type: 'ol',
        items: [
          'Square footage, the biggest single factor.',
          'Paver type and grade, from standard concrete pavers to premium porcelain or natural stone.',
          'Base prep and excavation, especially if grading or drainage work is needed.',
          'Pattern complexity, borders, and cuts around curves or features.',
          'Site access, a tight side yard slows material movement and adds labor.',
        ],
      },
      { type: 'h2', text: 'Do Not Skimp on the Base' },
      {
        type: 'p',
        text: 'The number one reason patios fail is a rushed base. Proper excavation, a compacted aggregate base, and correct drainage are what keep pavers level for decades. A bid that is dramatically cheaper than the rest is often cutting corners exactly here.',
      },
      {
        type: 'callout',
        text: 'Ask any contractor how deep their base is and whether they compact in lifts. The answer tells you whether the patio will still be flat in ten years.',
      },
      { type: 'h2', text: 'Budgeting Smart' },
      {
        type: 'p',
        text: 'Decide on your must-haves versus nice-to-haves, and remember a patio can be phased. Many Camarillo homeowners start with the core patio and add a seating wall, fire feature, or pergola later. We are glad to design the full vision and build it in stages.',
      },
    ],
  },
  {
    slug: 'hoa-landscape-approval-camarillo',
    title: 'Getting HOA Landscape Approval in Camarillo: What to Expect',
    excerpt:
      'How architectural review works, what boards look for, and how to avoid the most common delays.',
    date: '2026-04-03',
    tag: 'HOA',
    readTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'Camarillo is HOA country. From Mission Oaks to Dos Vientos Ranch, most neighborhoods have architectural guidelines that govern front-yard changes, hardscape, and more. Here is how to navigate approval without losing months.',
      },
      { type: 'h2', text: 'Why Approval Exists' },
      {
        type: 'p',
        text: 'HOA architectural review keeps neighborhoods cohesive and protects property values, which is a big part of why Camarillo homes hold their appeal. The flip side is that visible landscape changes usually need a green light before work begins.',
      },
      { type: 'h2', text: 'What Boards Look For' },
      {
        type: 'ul',
        items: [
          'A clear plan or drawing showing the proposed layout.',
          'Plant lists and, often, that designs are drought-tolerant.',
          'Material and color selections for any hardscape, sometimes from an approved list.',
          'Maintained, intentional design rather than a bare or unfinished look.',
        ],
      },
      { type: 'h2', text: 'Common Causes of Delay' },
      {
        type: 'ol',
        items: [
          'Incomplete submittals that bounce back for missing details.',
          'Missing the committee\'s meeting cutoff, pushing review to the next cycle.',
          'Proposing materials or colors outside the community\'s approved palette.',
        ],
      },
      {
        type: 'callout',
        text: 'The fastest approvals come from complete, professional submittals that anticipate what the board wants to see. That is something we handle as part of design.',
      },
      { type: 'h2', text: 'How We Help' },
      {
        type: 'p',
        text: 'We prepare plans in the format your HOA expects, choose compliant materials, and document everything so your project clears review the first time. Especially in stricter communities, that experience saves real time and frustration.',
      },
    ],
  },
  {
    slug: 'best-grass-for-camarillo-lawn',
    title: 'The Best Grass Varieties for a Camarillo Lawn',
    excerpt:
      'Fescue, Bermuda, or Zoysia? Match the right grass to your sun, traffic, and water goals.',
    date: '2026-03-18',
    tag: 'Lawns',
    readTime: '5 min read',
    content: [
      {
        type: 'p',
        text: 'If you want a real, living lawn in Camarillo, choosing the right grass variety matters as much as how it is installed. Each option has clear strengths. Here is how to pick.',
      },
      { type: 'h3', text: 'Tall Fescue' },
      {
        type: 'p',
        text: 'The all-around favorite for Camarillo families. Fescue is soft, stays green much of the year, and tolerates both sun and partial shade better than most. It needs regular water but is forgiving and looks great. A strong default choice for typical front and back yards.',
      },
      { type: 'h3', text: 'Bermuda' },
      {
        type: 'p',
        text: 'A tough, heat- and drought-resistant grass that loves full sun and shrugs off heavy traffic, ideal for active families and play areas. The trade-off is that it goes dormant and browns in cooler months and does not like shade.',
      },
      { type: 'h3', text: 'Zoysia' },
      {
        type: 'p',
        text: 'A dense, fine-textured grass that handles our summers well and uses less water than fescue once established. It is slower to fill in and can be pricier, but it makes a beautiful, lower-water lawn for the right yard.',
      },
      { type: 'h2', text: 'Quick Decision Guide' },
      {
        type: 'ul',
        items: [
          'Want soft, green, and shade-tolerant? Choose fescue.',
          'Full sun and heavy play with low fuss? Choose Bermuda.',
          'Lower water with a dense, manicured look? Choose Zoysia.',
        ],
      },
      {
        type: 'callout',
        text: 'No matter the variety, soil prep and grading before installation determine whether your new lawn thrives or struggles. Do not skip it.',
      },
    ],
  },
  {
    slug: 'smart-irrigation-save-water-camarillo',
    title: 'Smart Irrigation: How Camarillo Homeowners Cut Water Bills',
    excerpt:
      'Smart controllers, drip conversions, and the upgrades with the fastest payback in our climate.',
    date: '2026-02-26',
    tag: 'Irrigation',
    readTime: '6 min read',
    content: [
      {
        type: 'p',
        text: 'Irrigation is where most Camarillo water bills are quietly wasted, and where the easiest savings hide. A few targeted upgrades can cut outdoor water use substantially while keeping your landscape healthier.',
      },
      { type: 'h2', text: 'Upgrade to a Smart Controller' },
      {
        type: 'p',
        text: 'A weather-based smart controller adjusts watering automatically using local weather data, so you are not overwatering after a cool, cloudy stretch or a rare rain. For most homes it is the single highest-impact, fastest-payback irrigation upgrade, and rebates are often available.',
      },
      { type: 'h2', text: 'Convert Beds to Drip' },
      {
        type: 'p',
        text: 'Spray heads lose a lot of water to evaporation, overspray, and runoff. Converting shrub and planting beds to drip delivers water straight to the roots with minimal waste, often the second-biggest savings after a smart controller.',
      },
      { type: 'h2', text: 'Fix the Leaks You Cannot See' },
      {
        type: 'ul',
        items: [
          'A single broken or misaligned head can waste hundreds of gallons a month.',
          'Stuck valves and slow mainline leaks run up bills silently.',
          'Overlapping or mis-aimed heads water sidewalks instead of plants.',
        ],
      },
      {
        type: 'callout',
        text: 'A simple irrigation audit, checking each zone for coverage and leaks, frequently uncovers savings that pay for the visit many times over.',
      },
      { type: 'h2', text: 'Stay Ahead of Restrictions' },
      {
        type: 'p',
        text: 'Calleguas conservation rules can tighten in dry years. An efficient, well-zoned system keeps your landscape healthy even when watering windows shrink, so you are never scrambling when restrictions ramp up. That peace of mind is worth as much as the savings.',
      },
    ],
  },
];

export const blogPostMap = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));
