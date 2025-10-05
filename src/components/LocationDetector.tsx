import React, { useEffect } from 'react';

interface LocationDetectorProps {
  onLocationUpdate: (location: string) => void;
}

const LocationDetector: React.FC<LocationDetectorProps> = ({ onLocationUpdate }) => {
  useEffect(() => {
    const detectLocation = async () => {
      if (navigator.geolocation) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              timeout: 10000,
              maximumAge: 300000
            });
          });

          const { latitude, longitude } = position.coords;
          
          // Use a reverse geocoding service (replace with actual API key if needed)
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=nl`
          );
          
          if (response.ok) {
            const data = await response.json();
            const city = data.city || data.locality || 'jouw locatie';
            const province = data.principalSubdivision || '';
            
            const locationText = province ? `${city}, ${province}` : city;
            onLocationUpdate(locationText);
          } else {
            onLocationUpdate('Nederland');
          }
        } catch (error) {
          console.error('Error getting location:', error);
          onLocationUpdate('Nederland');
        }
      } else {
        onLocationUpdate('Nederland');
      }
    };

    detectLocation();
  }, [onLocationUpdate]);

  return null; // This component doesn't render anything
};

export default LocationDetector;