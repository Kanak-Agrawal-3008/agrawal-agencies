import { TeamMember } from '../types';

export const COMPANY_INFO = {
  name: 'Agrawal Agencies',
  legalName: 'Agrawal Agencies Private Limited',
  tagline: 'THE CORNERSTONE OF EVERY GREAT PROJECT',
  establishedYear: 1988,
  yearsOfExcellence: '35+',
  orderFulfillment: '100% Certified Tonnage',
  teamSize: '25 Dedicated Professionals',
  warehouseSize: '3.5-Acre Logistics Yard',
  weighbridgeCapacity: 'On-Site 80 MT Weighbridge',
  clientCount: '450+ Active Clients',
  primaryPhone: '+91 771 405 8800',
  salesHotline: '+91 98261 45000',
  dispatchPhone: '+91 98261 78900',
  whatsappNumber: '917066028105',
  email: 'sales@agrawalagencies.in',
  corporateEmail: 'contact@agrawalagencies.in',

  headquarters: {
    title: 'Administrative Headquarters',
    address: 'Agrawal House, Plot No. 14-16, Commercial Complex, Ring Road No. 2, Industrial Area, Raipur - 492001, Chhattisgarh, India',
    city: 'Raipur',
    state: 'Chhattisgarh',
    pincode: '492001',
    hours: 'Monday – Saturday: 9:30 AM – 7:30 PM (Sunday Closed)'
  },

  warehouse: {
    title: 'Central Logistics Yard & 80 MT Weighbridge',
    address: 'Survey No. 82/1-4, National Highway 53 Corridor, Heavy Industrial Estate, Raipur - 493111, Chhattisgarh, India',
    facilitySize: '3.5 Acres Covered & Open Yard',
    facilities: [
      'Twin 15-Ton Overhead Gantry Cranes',
      'Electronic 80 MT Weighbridge (Automated Calibration)',
      'Dedicated Fleet of 18 High-Tonnage Trailors & Trucks',
      'Covered Moisture-Protected Section for CPVC & Sheet Stocks'
    ],
    hours: 'Dispatch Operations: 7:00 AM – 9:00 PM Daily'
  },

  aboutParagraphs: [
    'Established in 1988, Agrawal Agencies has grown into a leading building materials wholesaler, providing foundational strength to the region’s infrastructure. For over three decades, we have been the trusted supply partner for top-grade reinforcement steel, structural steel, and plumbing solutions.',
    'Recently expanding our product lines, we now offer premium plumbing solutions featuring top-quality materials from a highly trusted, industry-leading PVC brand — Prince Piping Systems. Operating with a highly efficient, dedicated team of 25, we manage large-scale wholesale supply across Central India.',
    'Beyond just supply, our experienced sales and technical team actively assists builders and contractors in selecting the right products for every stage of construction. Our operational strength is anchored by a massive 3.5-acre warehouse facility equipped with end-to-end logistics support. This immense capacity ensures immediate stock availability, enabling faster deliveries and minimizing project delays.',
    'Today, we proudly serve a diverse and growing database of over 450 clients, ranging from small contractors to large-scale developers, powering construction projects with unmatched reliability and scale.'
  ],

  companyPillars: [
    {
      title: 'Family-Owned Enterprise',
      subtitle: 'Built on Trust & Integrity',
      description: 'Founded with a generational ethos of personal responsibility, ethical commerce, and deep customer relationships that span decades.'
    },
    {
      title: 'On-Site 80 MT Weighbridge',
      subtitle: 'Absolute Tonnage Transparency',
      description: 'State-certified computerized weighbridge on site ensures every single kilogram dispatched is accurately certified and weighed.'
    },
    {
      title: 'Uncompromising Quality Assurance',
      subtitle: '100% Verified Mill Test Reports',
      description: 'Every consignment comes with manufacturer chemical & physical Mill Test Certificates (MTC) adhering to IS 1786 and IS 2062.'
    },
    {
      title: 'Dedicated Administrative Headquarters',
      subtitle: 'Streamlined Order Execution',
      description: 'Centralized commercial office ensuring fast quotation turnaround, tax invoicing, billing clarity, and dedicated account managers.'
    },
    {
      title: 'Expert Sales Professionals',
      subtitle: 'Technical Selection Assistance',
      description: 'Our veteran team of 25 specialists assists site engineers and estimators in material scheduling and optimal grade selection.'
    },
    {
      title: 'Integrated In-House Logistics',
      subtitle: 'Rapid Site Delivery',
      description: 'Company-operated heavy vehicle fleet and dual overhead gantry cranes deliver materials straight to your project site on time.'
    }
  ],

  industries: [
    {
      id: 'high-rise',
      title: 'High-Rise & Residential Buildings',
      description: 'Supplying Fe 550D primary rebar, SWR drainage, and CPVC potable water piping to top real estate developers for towers up to 40 floors.',
      products: ['Tata Tiscon Fe 550D', 'Prince Smartfit Plus CPVC', 'Prince Ultrafit SWR']
    },
    {
      id: 'infrastructure',
      title: 'Highways, Bridges & Culverts',
      description: 'Certified SAIL & JSW steel joists, heavy NP4 centrifugally spun hume pipes, and Prince Corfit DWC pipes for national highway projects.',
      products: ['SAIL TMT EQR', 'Corfit DWC Pipes', 'RCC Spun Hume Pipes (NP4)']
    },
    {
      id: 'industrial-peb',
      title: 'Industrial Sheds & PEB Warehouses',
      description: 'Complete framing steel: ISMB beams, ISMC channels, equal angles, square hollow sections, and colour coated roofing sheets.',
      products: ['MS Beams & Channels', 'MS Square Hollow Sections', 'Colour Coated Roofing Sheets']
    },
    {
      id: 'smart-cities',
      title: 'Municipal Drainage & Smart Cities',
      description: 'Heavy duty anti-theft Bharat FRP covers, inspection chambers, and underground Foamfit drainage networks for urban infrastructure.',
      products: ['Bharat FRP & RCC Manhole Covers', 'Inspection Chambers', 'Drainfit Systems']
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Healthcare',
      description: 'Specialized Prince Decilo and Silentfit acoustic drainage systems ensuring whisper-quiet wastewater discharge in luxury hotels and hospitals.',
      products: ['Prince Decilo Low Noise', 'Prince Greenfit PPR', 'Storefit Multilayer Tanks']
    },
    {
      id: 'agriculture',
      title: 'Agricultural & Rural Water Networks',
      description: 'High burst-pressure Prince Aquafit rigid PVC pipes, PE-Fit Aqua HDPE lines, and flexible delivery hoses for expansive irrigation.',
      products: ['Prince Aquafit Agri', 'PE-Fit Aqua HDPE', 'Prince Terrafit Hoses']
    }
  ]
};

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    id: 'ramesh-agrawal',
    name: 'Rameshwar Lal Agrawal',
    role: 'Founder & Chairman',
    experience: '38+ Years in Steel & Construction Commerce',
    focus: 'Strategic Governance, Corporate Vision & Industry Relationships',
    bio: 'Pioneered Agrawal Agencies in 1988 with a vision to build the region’s most dependable building materials supply house. Over 38 years, established long-term alliances with Tata, SAIL, and top infrastructure corporations.',
    phone: '+91 771 405 8801'
  },
  {
    id: 'sanjay-agrawal',
    name: 'Sanjay Agrawal',
    role: 'Managing Director',
    experience: '26+ Years in Building Materials Wholesale',
    focus: 'Commercial Operations, Brand Partnerships & Business Growth',
    bio: 'Spearheaded the firm’s exponential commercial growth and market reach. Led the landmark strategic partnership with Prince Piping Systems to deliver integrated steel-to-plumbing solutions under one roof.',
    phone: '+91 98261 45001'
  },
  {
    id: 'amit-agrawal',
    name: 'Amit Agrawal',
    role: 'Director — Logistics & Supply Chain',
    experience: '18+ Years in Yard Management & Transportation',
    focus: '3.5-Acre Logistics Yard, 80 MT Weighbridge & Fleet Operations',
    bio: 'Oversees the central 3.5-acre distribution yard, automated gantry cranes, on-site weighbridge compliance, and the dedicated transport fleet guaranteeing just-in-time site dispatches.',
    phone: '+91 98261 78901'
  },
  {
    id: 'rajesh-sharma',
    name: 'Rajesh K. Sharma',
    role: 'Head of Technical Sales & Key Accounts',
    experience: '20+ Years in Civil & Structural Estimating',
    focus: 'Contractor Advisory, BOQ Analysis & Bulk Project Procurement',
    bio: 'Leads the 25-member sales engineering desk. Works hand-in-hand with structural consultants, developers, and project managers to optimize material schedules and grade selections.',
    phone: '+91 98261 45010'
  }
];
