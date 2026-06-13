import { useParams, Navigate } from 'react-router-dom';
import { serviceAreaMap } from '../data/serviceAreas';
import ServiceAreaPage from './ServiceAreaPage';
import { routes } from '../lib/routes';

export default function ServiceAreaRoute() {
  const { slug = '' } = useParams();
  const area = serviceAreaMap[slug];
  if (!area) return <Navigate to={routes.serviceAreas} replace />;
  return <ServiceAreaPage area={area} />;
}
