import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useTheme } from '../ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

// Reliable GeoJSON for Nigeria's states from a verified source
const NIGERIA_GEO_URL = "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/NGA.geo.json";

// List of potential GeoJSON URLs for Nigeria's states
const STATES_GEO_URLS = [
  "https://raw.githubusercontent.com/ebube-onyechi/nigeria-geojson/master/nigeria-states.json",
  "https://raw.githubusercontent.com/Anas-Sidi/Nigeria-GeoJSON/master/nigeria.json",
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/nigeria.geojson",
  "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/nigeria.geojson"
];

interface NigeriaMapProps {
  onStateClick?: (stateName: string) => void;
  selectedState?: string;
}

export default function NigeriaMap({ onStateClick, selectedState }: NigeriaMapProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [geoData, setGeoData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMap = async () => {
      setError(null);
      
      // Try fetching from the list of potential states URLs first
      for (const url of STATES_GEO_URLS) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            setGeoData(data);
            return; // Success!
          }
        } catch (err) {
          console.warn(`Failed to fetch from ${url}:`, err);
        }
      }

      // Fallback to the country outline if all states URLs fail
      try {
        const res = await fetch(NIGERIA_GEO_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setGeoData(data);
      } catch (err: any) {
        console.error(`Error fetching from ${NIGERIA_GEO_URL}:`, err);
        setError('Could not load map data. Please check your connection.');
      }
    };

    fetchMap();
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] bg-white dark:bg-navy-blue/30 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden transition-all duration-500 group flex items-center justify-center">
      <div className="absolute top-8 left-8 z-10">
        <h3 className="text-xs font-bold text-apc-red uppercase tracking-[0.3em] mb-1">Interactive Map</h3>
        <p className="text-2xl font-display text-navy-blue dark:text-white">NATIONAL IMPACT</p>
      </div>

      <AnimatePresence>
        {hoveredState && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-8 right-8 z-10 bg-white dark:bg-navy-blue p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 pointer-events-none"
          >
            <p className="text-[10px] font-bold text-nigeria-green uppercase tracking-widest mb-1">Viewing State</p>
            <p className="text-xl font-display text-navy-blue dark:text-white uppercase">{hoveredState}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!geoData && !error && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-nigeria-green/20 border-t-nigeria-green rounded-full animate-spin"></div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Loading Map Data...</p>
        </div>
      )}

      {error && (
        <div className="text-center p-8">
          <p className="text-apc-red font-bold mb-2 uppercase tracking-widest">Map Load Error</p>
          <p className="text-xs text-gray-500">{error}</p>
        </div>
      )}

      {geoData && (
        <ComposableMap
          width={800}
          height={600}
          projection="geoMercator"
          projectionConfig={{
            scale: 3000,
            center: [8.6753, 9.0820], // Center of Nigeria
          }}
          className="w-full h-full"
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const props = geo.properties || {};
                const stateName = props.name || props.NAME_1 || props.state || props.Name || props.NAME || "Nigeria";
                const isSelected = selectedState === stateName;
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredState(stateName)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={() => onStateClick?.(stateName)}
                    style={{
                      default: {
                        fill: isSelected ? "#008751" : (isDark ? "#1e293b" : "#F8FAFC"),
                        stroke: isDark ? "#334155" : "#E2E8F0",
                        strokeWidth: 0.5,
                        outline: "none",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      },
                      hover: {
                        fill: "#008751",
                        stroke: "#008751",
                        strokeWidth: 1.5,
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#005C37",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      )}

      <div className="absolute bottom-8 left-8 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-nigeria-green"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Projects</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-white/10"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Planned</span>
        </div>
      </div>
    </div>
  );
}
