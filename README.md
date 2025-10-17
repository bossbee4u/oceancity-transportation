# Ocean City Transportation - Fleet Management System

A comprehensive fleet management system built with React, TypeScript, and Supabase for Ocean City Transportation.

## Features

- **Fleet Management**: Track and manage trucks, trailers, and drivers
- **Shipment Tracking**: Monitor shipments from origin to destination
- **Company Management**: Manage multiple transportation companies
- **User Authentication**: Secure login with role-based access control
- **Admin Panel**: Administrative tools for system management
- **Real-time Updates**: Live tracking and status updates
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Radix UI, Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bossbee4u/oceancity-transportation.git
cd oceancity-transportation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your Supabase credentials in `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   ├── AppSidebar.tsx  # Main navigation sidebar
│   ├── ProtectedRoute.tsx # Route protection component
│   └── PublicNav.tsx   # Public navigation
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication context
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
│   └── supabase/      # Supabase configuration
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Drivers.tsx     # Driver management
│   ├── Trucks.tsx      # Truck management
│   ├── Trailers.tsx    # Trailer management
│   └── Companies.tsx   # Company management
├── types/              # TypeScript type definitions
└── lib/                # Utility functions
```

## Database Schema

The application uses Supabase with the following main tables:

- **profiles**: User profiles and roles
- **companies**: Transportation companies
- **drivers**: Driver information and licenses
- **trucks**: Truck fleet data
- **trailers**: Trailer inventory
- **shipments**: Shipment tracking and details

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@oceancity.com or join our Slack channel.