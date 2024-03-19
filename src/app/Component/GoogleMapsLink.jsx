import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";

const GoogleMapsLink = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <Link href="https://maps.app.goo.gl/ywhA6dXokCky6nR5A">
        <div className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          <FaMapMarkedAlt />
          Google Maps
        </div>
      </Link>
    </div>
  );
};

export default GoogleMapsLink;
