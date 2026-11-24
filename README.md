# Campus Event Hub

MIS 457 - Web Based Application Programming (Week 2 Assignment)

### Team Members & Contributions (Week 5)
* Başak Kılıç: Express & CORS Setup
* İrgenur Yıldırım: CRUD Endpoints
* İkranur Gültekin: Frontend API Connection
* Tuğçenaz Kanyılmaz: REST API Design Table
* Görkem Gökçe: Postman Tests & Collection Export

## Features
- Semantic HTML5 structure (Header, Nav, Main, Footer)
- Accessible Registration Form with validation
- Responsive design: 1 column on mobile (375px), 3 columns on desktop (1280px)
- Flexbox navigation and CSS Grid layout
- Lighthouse Accessibility score: 90+
- Dynamic event cards rendered from JavaScript array (DOM manipulation)
- Client-side form validation with descriptive alerts and XSS prevention (textContent)
- Asynchronous data loading from data.json via Fetch API
- Four UI states (Loading, Success, Empty, Error)
- Live search filtering
## Week 5 - REST API Design

| HTTP Method | Endpoint | Description | Status Code |
|-------------|----------|-------------|-------------|
| GET | `/api/events` | List all events | 200 |
| GET | `/api/events/:id` | Get single event by ID | 200 / 404 |
| POST | `/api/events` | Create a new event | 201 / 400 |
| PUT | `/api/events/:id` | Update an existing event | 200 / 404 |
| DELETE | `/api/events/:id` | Delete an event | 204 / 404 |