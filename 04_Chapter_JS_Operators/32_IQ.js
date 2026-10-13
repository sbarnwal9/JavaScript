let responseTime = 850;
let sla =1000 ;
let slaStatus = responseTime <= sla ? "SLA Met" : "SLA Not Met";
console.log(`Response: ${responseTime}ms - ${slaStatus}`);  // Output: Response time is within SLA: SLA Met

//Template Literal
console.log('What is the SLA time? - ${sla}ms');  // Output: What is the SLA time? - 1000ms
