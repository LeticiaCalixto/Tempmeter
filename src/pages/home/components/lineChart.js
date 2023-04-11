// import { CardTitle } from '../../../components';
// import { Card } from 'react-bootstrap';
// import { formatCurrency } from 'utils/currency';
// import "../styles/InformationsDashboard.scss";

// type TaxesChartCardProps = {
//     cardTitleText: string,
//     cardTitleIcon: string,
//     cardValue: number
// }

// export default function TaxesChartCard({ cardTitleText, cardTitleIcon, cardValue }: TaxesChartCardProps) {
//     return (
//         <Card className="my-2 h-100">
//             <Card.Body>
//                 <CardTitle
//                     containerClass="d-flex align-items-start justify-content-between"
//                     title={
//                         <div className="d-flex align-items-center justify-content-between">
//                             <span className="informations__dashboard__card__icon">
//                                 <i className={`${cardTitleIcon} p-1`}></i>
//                             </span>
//                             <div className="informations__dashboard__card__title">
//                                 <h5 className="text-muted fw-normal mt-0 text-truncate">{cardTitleText}</h5>
//                                 <h4 className="font-weigth-bold">{cardValue ? formatCurrency(cardValue): 'R$0,00'}</h4>
//                             </div> 
//                         </div>
//                     }
//                     icon="mdi mdi-alert-circle-outline"
//                     menuItems={[]}
//                 />
//             </Card.Body>
//         </Card>
//     );
// }
