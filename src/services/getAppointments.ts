const getAppointments = () => {
  return new Promise<IAppointments[]>((resolve) => {
    setTimeout(() => {
      const appointments: any = [
        {
          id: "1",
          type: "EVENTS",
          tasks: [
            {
              id: "1",
              name: "Event 1",
              priority: "High",
              origin: "Origin 1",
              shortDescription: "Short description 1",
              largeDescription: "Large description 1",
              date: "2023-12-15T12:00:00Z",
              coordinates: { latitude: 40.7128, longitude: -74.006 },
            },
            {
              id: "2",
              name: "Event 1",
              priority: "High",
              origin: "Origin 1",
              shortDescription: "Short description 1",
              largeDescription: "Large description 1",
              date: "2023-12-15T12:00:00Z",
              coordinates: { latitude: 40.7128, longitude: -74.006 },
            },
            {
              id: "3",
              name: "Event 1",
              priority: "High",
              origin: "Origin 1",
              shortDescription: "Short description 1",
              largeDescription: "Large description 1",
              date: "2023-12-15T12:00:00Z",
              coordinates: { latitude: 40.7128, longitude: -74.006 },
            },
            {
              id: "4",
              name: "Event 1",
              priority: "High",
              origin: "Origin 1",
              shortDescription: "Short description 1",
              largeDescription: "Large description 1",
              date: "2023-12-15T12:00:00Z",
              coordinates: { latitude: 40.7128, longitude: -74.006 },
            },
          ],
        },
        {
          id: "2",
          type: "ADVISORY",
          tasks: [
            {
              id: "1",
              name: "Advisory 1",
              priority: "Medium",
              origin: "Origin 2",
              shortDescription: "Short description 2",
              largeDescription: "Large description 2",
              date: "2023-12-16T14:30:00Z",
              coordinates: { latitude: 34.0522, longitude: -118.2437 },
            },
            {
              id: "2",
              name: "Advisory 1",
              priority: "Medium",
              origin: "Origin 2",
              shortDescription: "Short description 2",
              largeDescription: "Large description 2",
              date: "2023-12-16T14:30:00Z",
              coordinates: { latitude: 34.0522, longitude: -118.2437 },
            },
            {
              id: "3",
              name: "Advisory 1",
              priority: "Medium",
              origin: "Origin 2",
              shortDescription: "Short description 2",
              largeDescription: "Large description 2",
              date: "2023-12-16T14:30:00Z",
              coordinates: { latitude: 34.0522, longitude: -118.2437 },
            },
            {
              id: "4",
              name: "Advisory 1",
              priority: "Medium",
              origin: "Origin 2",
              shortDescription: "Short description 2",
              largeDescription: "Large description 2",
              date: "2023-12-16T14:30:00Z",
              coordinates: { latitude: 34.0522, longitude: -118.2437 },
            },
          ],
        },
        {
          id: "3",
          type: "SERVICES DELIVERY",
          tasks: [
            {
              id: "3",
              name: "Delivery 1",
              priority: "Low",
              origin: "Origin 3",
              shortDescription: "Short description 3",
              largeDescription: "Large description 3",
              date: "2023-12-17T10:45:00Z",
              coordinates: { latitude: 51.5074, longitude: -0.1278 },
            },
            {
              id: "4",
              name: "Delivery 3",
              priority: "Low",
              origin: "Origin 3",
              shortDescription: "Short description 3",
              largeDescription: "Large description 3",
              date: "2023-12-17T10:45:00Z",
              coordinates: { latitude: 51.5074, longitude: -0.1278 },
            },
            {
              id: "5",
              name: "Delivery 4",
              priority: "Low",
              origin: "Origin 3",
              shortDescription: "Short description 3",
              largeDescription: "Large description 3",
              date: "2023-12-17T10:45:00Z",
              coordinates: { latitude: 51.5074, longitude: -0.1278 },
            },
          ],
        },
      ];

      resolve(appointments);
    }, 1000);
  });
};

export default getAppointments;

export interface IAppointments {
  id: string;
  type: string;
  tasks: ITasks[];
}

export interface ITasks {
  id: string;
  name: string;
  priority: string;
  origin: string;
  shortDescription: string;
  largeDescription: string;
  date: string;
  coordinates: { latitude: number; longitude: number };
}
