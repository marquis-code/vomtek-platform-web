export type Division = {
  slug: string
  index: string
  name: string
  shortName: string
  tagline: string
  summary: string
  description: string
  image: string
  imageAlt: string
  capabilities: string[]
  outcomes: string[]
  industries: string[]
  proof: { value: string; label: string }[]
  featured?: boolean
}

export const divisions: Division[] = [
  {
    slug: 'control-systems', index: '01', name: 'Control Systems & Instrumentation', shortName: 'Control Systems',
    tagline: 'Panels designed, wired, tested and supported.',
    summary: 'Custom UL 508A control panels, PLC/HMI systems, instrumentation and startup support.',
    description: 'We design and build the control system behind your process — from the electrical drawing to the panel, the field wiring and the first day of operation. Every panel is built, labelled and tested in our shop before it ships.',
    image: 'panel-assembly', imageAlt: 'Custom control panel being assembled and wired',
    capabilities: ['Custom control panel design', 'UL 508A panel assembly', 'PLC, HMI and SCADA panels', 'VFD, MCC and motor control', 'Instrument and junction panels', 'Point-to-point wiring and testing', 'Installation, startup and documentation'],
    outcomes: ['One team from drawing to startup', 'Panels tested before they leave the shop', 'Documentation your maintenance team can use', 'Support after the line is running'],
    industries: ['Water and wastewater', 'Energy and utilities', 'Food and beverage', 'Manufacturing', 'Oil and gas'],
    proof: [{ value: 'UL 508A', label: 'panel shop' }, { value: 'In-house', label: 'design and build' }, { value: 'Tested', label: 'before delivery' }], featured: true,
  },
  {
    slug: 'electrical', index: '02', name: 'Electrical Engineering', shortName: 'Electrical',
    tagline: 'Power, distribution and electrical service.',
    summary: 'Electrical design, panel assembly, motor and transformer repair, installations and maintenance.',
    description: 'Vomtek supports the electrical side of an industrial site — from power distribution and control wiring to troubleshooting, repairs and planned maintenance. We work on new builds, upgrades and emergency fixes.',
    image: 'electrician-meter', imageAlt: 'Electrician testing an electrical panel',
    capabilities: ['Electrical design and drawings', 'Power distribution and switchgear', 'Electrical panel assembly and repair', 'Transformer and motor repair', 'Electrical wiring and installations', 'Preventive maintenance', 'Breakdown response'],
    outcomes: ['Fewer unplanned electrical stops', 'Clear drawings and panel labels', 'Repairs that match the original design', 'A local team for planned and urgent work'],
    industries: ['Water and wastewater', 'Energy', 'Manufacturing', 'Commercial facilities', 'Municipal infrastructure'],
    proof: [{ value: 'Design', label: 'and build' }, { value: 'Repair', label: 'and maintenance' }, { value: 'Field', label: 'service' }], featured: true,
  },
  {
    slug: 'electronics', index: '03', name: 'Electronics & Harness', shortName: 'Electronics',
    tagline: 'From circuit board to finished cable.',
    summary: 'PCB layout, electronics design, wire harnesses and cable assemblies for industrial equipment.',
    description: 'We turn an electrical requirement into a board, a harness or a complete cable assembly. Our team works in Altium, Allegro, PCAD and PADS, and builds prototypes and production runs with the same attention to labelling and test.',
    image: 'panel-line', imageAlt: 'Electronics production and panel assembly line',
    capabilities: ['PCB layout and design', 'Altium, Allegro, PCAD and PADS', 'Wire harness design and build', 'Cable assembly', 'Silicon and braided harnesses', 'Prototype and production support', 'Continuity and function testing'],
    outcomes: ['A build that matches the drawing', 'Harnesses labelled for installation', 'Prototype support without a long handoff', 'One supplier for board, cable and panel'],
    industries: ['Industrial equipment', 'Automotive', 'Energy', 'Manufacturing', 'Custom machinery'],
    proof: [{ value: 'PCB', label: 'layout and design' }, { value: 'Harness', label: 'build and test' }, { value: 'Low to', label: 'production volume' }], featured: true,
  },
  {
    slug: 'motor-service', index: '04', name: 'Motor & Field Service', shortName: 'Motor Service',
    tagline: 'Repair, rewind and test — with field support.',
    summary: 'AC, DC, servo, stepper and spindle motor repair, rewinding, testing and on-site service.',
    description: 'When a motor stops, production stops. We repair and rewind industrial motors, test them before return, and support the installation in the field. We also build custom test equipment for motors and related equipment.',
    image: 'motor-rewind', imageAlt: 'Technician rewinding an industrial motor',
    capabilities: ['AC, DC, servo and stepper repair', 'Spindle motor rewinding', 'Motor testing and load checks', 'Transformer repair', 'Custom test equipment', 'Pickup and delivery', 'On-site troubleshooting'],
    outcomes: ['A tested motor, not just a repaired one', 'Faster return to production', 'A repair record for your maintenance file', 'Field help when the problem is not the motor'],
    industries: ['Manufacturing', 'Water and wastewater', 'Energy', 'Food processing', 'Facilities'],
    proof: [{ value: 'AC / DC', label: 'motor repair' }, { value: 'Rewind', label: 'and test' }, { value: 'Field', label: 'support' }], featured: true,
  },
  {
    slug: 'fabrication', index: '05', name: 'Mechanical & Fabrication', shortName: 'Fabrication',
    tagline: 'Precision parts, frames and enclosures.',
    summary: 'Machining, sheet metal, laser cutting, welding and custom frames for industrial equipment.',
    description: 'Our fabrication team builds the metal parts around the electrical system — enclosures, frames, brackets, skids and guards. We work from drawings or a sample and deliver parts that fit the first time.',
    image: 'fabrication-sparks', imageAlt: 'Metal fabrication with sparks in a workshop',
    capabilities: ['CNC machining', 'Sheet metal and laser cutting', 'Welding and fabrication', 'Enclosures and frames', 'Skids and mounting systems', 'Small-batch production', 'Finish and assembly'],
    outcomes: ['Parts that match the drawing', 'One supplier for electrical and mechanical', 'Small batches without a large tooling bill', 'Delivery coordinated with the build'],
    industries: ['Industrial equipment', 'Energy', 'Water', 'Manufacturing', 'Custom machinery'],
    proof: [{ value: 'CNC', label: 'machining' }, { value: 'Laser', label: 'cutting' }, { value: 'Weld', label: 'and finish' }], featured: true,
  },
  {
    slug: 'pipeline', index: '06', name: 'Pipeline Inspection', shortName: 'Pipeline',
    tagline: 'See what is happening inside the line.',
    summary: 'Pipeline inspection, pigging, data review and a customer portal for operators, utilities and homeowners.',
    description: 'Our pipeline division helps operators and property owners find problems before they become failures. We combine inspection tools, data review and plain-language reports with a live customer portal for assets, reports, parts and contractor work.',
    image: 'pipeline-construction', imageAlt: 'Large-diameter pipeline under construction',
    capabilities: ['Pipeline inspection and pigging', 'Inspection data review', 'Safety and growth reports', 'Pipeline parts and tool rental', 'Home drain camera checks', 'Contractor repair network', 'Customer portal and reporting'],
    outcomes: ['A clear list of what to fix first', 'Reports your team can understand', 'Parts and tools in one place', 'Repair and payment tracked together'],
    industries: ['Oil and gas', 'Water and wastewater', 'Municipal utilities', 'Industrial plants', 'Homes and property'],
    proof: [{ value: 'B2B', label: 'and home checks' }, { value: 'Live', label: 'customer portal' }, { value: 'One', label: 'inspection record' }], featured: true,
  },
]

export const extraDivisions = [
  { slug: 'automotive', name: 'Vomtek Automotive', group: 'Group company', summary: 'Vehicle repair and maintenance in Lagos, Nigeria.', image: 'machine-team' },
  { slug: 'facilities', name: 'Facilities & Real Estate', group: 'Group capability', summary: 'Electrical and mechanical support for property and facility teams.', image: 'houston-office' },
]

export const divisionBySlug = (slug: string) => divisions.find(d => d.slug === slug)
