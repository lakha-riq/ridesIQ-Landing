export const blogPosts = [
  {
    slug: 'fleet-management-trends',
    title: 'Top 5 Fleet Management Trends in 2025',
    excerpt:
      'Explore how AI-powered analytics are transforming fleet operations and driving new levels of efficiency in 2025.',
    content: `
## The Role of AI in Modern Fleet Management

Artificial Intelligence is revolutionizing how fleet managers make decisions and optimize their operations. From predictive maintenance to route optimization, AI algorithms are processing vast amounts of data to deliver actionable insights in real-time.

### Key Benefits of AI-Powered Analytics:

1. **Predictive Maintenance**
   - Early detection of potential vehicle issues
   - Reduced downtime and maintenance costs
   - Optimized service scheduling

2. **Route Optimization**
   - Real-time traffic analysis
   - Weather-aware routing
   - Fuel consumption optimization

3. **Driver Behavior Analysis**
   - Safety improvement
   - Fuel efficiency optimization
   - Performance monitoring

## Implementing AI Solutions in Your Fleet

The transition to AI-powered fleet management requires careful planning and execution. Here's a step-by-step approach to implementing these solutions effectively:

1. **Assessment Phase**
   - Evaluate current operations
   - Identify key pain points
   - Define success metrics

2. **Technology Selection**
   - Choose appropriate AI solutions
   - Ensure compatibility with existing systems
   - Consider scalability requirements

3. **Implementation Strategy**
   - Develop a phased approach
   - Train staff and drivers
   - Monitor and adjust as needed

## Measuring Success

The impact of AI-powered analytics can be measured across various metrics:

- Reduced fuel consumption
- Decreased maintenance costs
- Improved driver safety scores
- Enhanced customer satisfaction
- Increased operational efficiency

## Looking Ahead

As AI technology continues to evolve, we can expect even more sophisticated solutions for fleet management. Stay ahead of the curve by keeping informed about the latest developments and being ready to adapt to new technologies as they emerge.
    `,
    image: '/blog/trends.jpg',
    author: {
      name: 'John Doe',
      avatar: '/authors/john.jpg',
    },
    publishedAt: new Date('2025-06-01'),
  },
  {
    slug: 'driver-safety',
    title: 'Improving Driver Safety with Real-Time Data',
    excerpt:
      'Learn how real-time insights are transforming road safety standards for commercial fleets.',
    content: `
## Real-Time Data and Driver Safety

Fleet safety is no longer just about compliance — it’s about proactive insights. With real-time data, fleet managers can monitor driver behavior, vehicle health, and road conditions in real-time.

### Benefits Include:

- Immediate alerts for harsh braking or speeding
- Better training and coaching programs
- Safer driving culture and fewer accidents
    `,
    image: '/blog/safety.jpg',
    author: {
      name: 'Jane Smith',
      avatar: '/authors/jane.jpg',
    },
    publishedAt: new Date('2025-05-20'),
  },
];

export const popularPosts = [
  {
    slug: 'fleet-savings',
    title: 'How to Save Fuel with Smarter Routing',
    image: '/blog/fuel.jpg',
    publishedAt: new Date('2025-04-15'),
  },
];

export const recentPosts = [
  {
    slug: 'gps-vs-telematics',
    title: 'GPS Tracking vs. Full Telematics: What’s the Difference?',
    image: '/blog/gps-vs-telematics.jpg',
    publishedAt: new Date('2025-06-28'),
  },
];

export const tags = [
  { name: 'Telematics', count: 12 },
  { name: 'Fleet Safety', count: 8 },
  { name: 'Cost Reduction', count: 5 },
];
