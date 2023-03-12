import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics(metric) {
  const { name, delta, value } = metric;
  // Send the metric to analytics or other tracking service
  console.log(`${name}: ${value}`);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
