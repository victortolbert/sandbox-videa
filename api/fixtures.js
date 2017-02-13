const profile = {
  'firstName': 'Victor',
  'lastName': 'Tolbert',
  'limit': 850.00
}


// "id": 65733,
// "releasedDate": "04/05/16",
// "expirationDate": "05/06/16",
// "lastUpdated": "04/05/16 04:50 PM",
// "grossMarketBudget": 140000,
// "totalGrpGoal": 800,
// "primaryDemo": "A25-54",
// "lastUpdatedBy": "Brian Reed",
// "shareGoal": 0.3,
// "dueDate": "05/06/16",

const order = {
  id: 13501,
  agencyOrderNumber: 13501,
  status: "active",
  station: "WVVV",
  market: "Washington",
  advertiserName: 'Piedmont Healthcare',
  agencyName: 'Hughes-Martin Agency',
  cpe: 'PHC-HEA-57',
  productName: 'HEA',
  campaign: 'PIE-HEA-57 Q116',
  campaignName: "WASHI WVVV PHC-HEA-57 Q2'16",
  startDate: '11/14/16',
  endDate: '12/25/16',
  firstName: 'Joe',
  lastName: 'Montana',
  limit: 850.00,
  revenue: 37189,
  totalSpots: 113,
  salesPerson: 'Brian Reed',
  orderDate: '05/18/16',
  estimateNumber: '57',
  buyerName: 'Janna Valentine',
  demo: 'A25-54',
  stationOrderId: 111111,
  videaOrderNumber: 111111,
  buyerStatusName: '',
  totalCost: 111111,
  totalGuaranteeRating: 11111,
  totalGuaranteeImpressions: 11111,
  totalSpotsQuantity: 11111,
  dealType: '',
  buyerAvailRequestNotes: '',
  buyerOrderComment: '',
  customerCareCommentToStation: '',
  transferInternalComment: '',
  buyerVersion: '',
  scheduleType: '',
  orderDetails: [
    { label: 'Status', field: 'status', value: 'new', location: 'primary' },
    { label: 'Videa Order ID', field: 'id', align: 'center', value: 13501, location: 'primary' },
    { label: 'Order Type', field: 'id', align: 'center', value: 'Original', location: 'primary' },
    { label: 'Advertiser', field: 'advertiser', value: 'Piedmont Healthcare', location: 'primary' },
    { label: 'CPE', field: 'cpe', value: 'PHC-HEA-57', location: 'primary' },
    { label: 'Agency', field: 'agency', value: 'Hughes-Martin Agency', location: 'primary' },
    { label: 'Total Revenue', field: 'revenue', value: 37189, location: 'primary' },
    { label: 'Share', field: 'share', value: 0.27, location: 'primary' },
    { label: 'Total Spots', field: 'totalSpots', value: 113, location: 'primary' },
    { label: 'Flight Start', field: 'flightStartDate', value: '11/14/16', location: 'primary' },
    { label: 'Flight End', field: 'flightEndDate', value: '12/25/16', location: 'primary' },
    { label: 'Demo', field: 'demo', value: 'A25-54', location: 'primary' },
    { label: 'Sales Office', field: 'demo', value: 'Videa', location: 'primary' },
    { label: 'Location', field: 'demo', value: 'Atlanta', location: 'primary' },
    { label: 'Salesperson', field: 'demo', value: 'Brian Reed', location: 'primary' },
    { label: 'Order Date', field: 'orderDate', value: '05/18/16', location: 'secondary' },
    { label: 'Estimate', field: 'estimate', align: 'center', value: 13501, location: 'secondary' },
    { label: 'Buyer', field: 'buyer', value: 'Janna Valentine', location: 'secondary' },
    { label: 'Campaign', field: 'campaign', value: 'PIE-HEA-57 Q116', location: 'secondary' }
  ]
}

const orders = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2, 'shipping': 15.00 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10, 'shipping': 5.00 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 3, 'shipping': 22.50 },
  { 'id': 4, 'title': 'Licensed Steel Gloves', 'price': 30.99, 'inventory': 5, 'shipping': 9.00 },
  { 'id': 5, 'title': 'Rustic Granite Car', 'price': 487.00, 'inventory': 1, 'shipping': 35.00 },
  { 'id': 6, 'title': 'Fantastic Cotton Pants', 'price': 59.59, 'inventory': 6, 'shipping': 11.00 },
  { 'id': 7, 'title': 'Tasty Wooden Pizza', 'price': 29.00, 'inventory': 2, 'shipping': 18.00 },
  { 'id': 8, 'title': 'Incredible Concrete Fish', 'price': 12.99, 'inventory': 4, 'shipping': 6.00 },
  { 'id': 9, 'title': 'Generic Granite Computer', 'price': 109.10, 'inventory': 10, 'shipping': 22.70 },
  { 'id': 10, 'title': 'Handcrafted Soft Salad', 'price': 13.99, 'inventory': 3, 'shipping': 3.50 },
  { 'id': 11, 'title': 'Incredible Steel Bacon', 'price': 30.99, 'inventory': 5, 'shipping': 7.90 },
  { 'id': 12, 'title': 'Tasty Plastic Bike', 'price': 75.00, 'inventory': 5, 'shipping': 25.00 }
]

const trafficLogs = [ ]
const makeGoods = []
const agencyInvoiceDetails = []
const lineItems = []

const products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2, 'shipping': 15.00 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10, 'shipping': 5.00 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 3, 'shipping': 22.50 },
  { 'id': 4, 'title': 'Licensed Steel Gloves', 'price': 30.99, 'inventory': 5, 'shipping': 9.00 },
  { 'id': 5, 'title': 'Rustic Granite Car', 'price': 487.00, 'inventory': 1, 'shipping': 35.00 },
  { 'id': 6, 'title': 'Fantastic Cotton Pants', 'price': 59.59, 'inventory': 6, 'shipping': 11.00 },
  { 'id': 7, 'title': 'Tasty Wooden Pizza', 'price': 29.00, 'inventory': 2, 'shipping': 18.00 },
  { 'id': 8, 'title': 'Incredible Concrete Fish', 'price': 12.99, 'inventory': 4, 'shipping': 6.00 },
  { 'id': 9, 'title': 'Generic Granite Computer', 'price': 109.10, 'inventory': 10, 'shipping': 22.70 },
  { 'id': 10, 'title': 'Handcrafted Soft Salad', 'price': 13.99, 'inventory': 3, 'shipping': 3.50 },
  { 'id': 11, 'title': 'Incredible Steel Bacon', 'price': 30.99, 'inventory': 5, 'shipping': 7.90 },
  { 'id': 12, 'title': 'Tasty Plastic Bike', 'price': 75.00, 'inventory': 5, 'shipping': 25.00 }]


const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '$100.00 Discount' },
  { 'id': 3, 'title': 'Free Shipping' },
  { 'id': 4, 'title': '+ $100.00 on limit' }
]

const employees = [
  { 'id': 1, 'name': 'Victor Tolbert' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },
  getOrder (cb) {
    setTimeout(() => cb(order), 200)
  },
  getOrders (cb) {
    setTimeout(() => cb(orders), 200)
  },
  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  },
  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  },
  getEmployees (cb) {
    setTimeout(() => cb(employees), 200)
  }
}
