import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class PartialNav extends React.Component {
  render() {
    return (
      <>
        <Nav className="mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to={'/'}>
              Home
            </Link>
            {/* sub menu */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/about'}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ cursor: 'pointer' }}>
              Visa Services
            </a>
            <ul className="sub-menu">
              <li>
                <Link to={'/visa-service/Working%20Visa'}>
                  Working Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Investor%20Visa'}>
                  Investor Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Dependent%20Visa'}>
                  Dependent Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Single%20Entry%20Visa'}>
                  Single Entry Visa - B211
                </Link>
              </li>
              <li>
                <Link
                  to={
                    '/visa-service/Single%20Entry%20Visa%20Extension'
                  }
                >
                  Single Entry Visa Extension
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Multiple%20Entry%20Visa'}>
                  Multiple Entry Visa - D212
                </Link>
              </li>

              <li>
                <Link to={'/visa-service/Visa%20On%20Arrival'}>
                  Visa On Arrival (VOA) Extension
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Calling%20Visa%20Indonesia'}>
                  Calling Visa Indonesia
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Second%20Home%20Visa'}>
                  Second Home Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Spouse%20Visa'}>
                  Spouse Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Study%20Visa'}>
                  Study Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Freelance%20Work%20Visa'}>
                  Freelance Work Visa (Kitas)
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Citizenship'}>
                  Citizenship
                </Link>
              </li>
              <li>
                <Link to={'/visa-service/Permanent%20Stay%20Visa'}>
                  Permanent Stay Visa (Kitap)
                </Link>
              </li>
            </ul>
            {/* sub menu */}
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ cursor: 'pointer' }}>
              Imigration Services
            </a>
            <ul className="sub-menu">
              <li>
                <Link to={'/immigrants/VIP%20Airport%20Services'}>
                  VIP Airport Services
                </Link>
              </li>
              <li>
                <Link to={'/immigrants/Overstay%20Settlement'}>
                  Overstay Settlement
                </Link>
              </li>
              <li>
                <Link to={'/immigrants/Deportation%20Clearance'}>
                  Deportation Clearance
                </Link>
              </li>
              <li>
                <Link
                  to={
                    '/immigrants/Police%20Clearance%20Certificate%20(SKCK)'
                  }
                >
                  Police Clearance Certificate (SKCK)
                </Link>
              </li>
              <li>
                <Link
                  to={
                    '/immigrants/Travel%20Permit%20Certificate%20(SKJ)'
                  }
                >
                  Travel Permit Certificate (SKJ)
                </Link>
              </li>
              <li>
                <Link to={'/immigrants/Immigration%20Documents'}>
                  Immigration Documents
                </Link>
              </li>
              <li>
                <Link
                  to={'/immigrants/Other%20Important%20Documents'}
                >
                  Other Important Documents
                </Link>
              </li>
            </ul>
            {/* sub menu */}
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ cursor: 'pointer' }}>
              Company Establishment
            </a>
            <ul className="sub-menu">
              <li>
                <Link to={'/company/PMA%20Company%20Establishment'}>
                  PMA Company Establishment
                </Link>
              </li>
              <li>
                <Link to={'/company/PT%20Company%20Establishment'}>
                  PT Company Establishment
                </Link>
              </li>

              <li>
                <Link to={'/company/CV%20Company%20Establishment'}>
                  CV Company Establishment
                </Link>
              </li>
              <li>
                <Link
                  to={'/company/Respresentative%20Office%20Setup'}
                >
                  Respresentative Office Setup
                </Link>
              </li>
              <li>
                <Link to={'/company/Foundation%20Setup'}>
                  Foundation Setup
                </Link>
              </li>
              <li>
                <Link to={'/company/Business%20Licensing'}>
                  Business Licensing
                </Link>
              </li>
              <li>
                <Link
                  to={
                    '/company/Virtual%20&%20Serviced%20Office%20Space'
                  }
                >
                  Virtual & Serviced Office Space
                </Link>
              </li>
              <li>
                <Link to={'/company/Trademark%20Registration'}>
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link to={'/company/Company%20Closure'}>
                  Company Closure
                </Link>
              </li>
            </ul>
            {/* sub menu */}
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ cursor: 'pointer' }}>
              Terms & Conditions
            </a>
            <ul className="sub-menu">
              <li>
                <Link to={'/terms-conditions'}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to={'/payment-method'}>Payment Method</Link>
              </li>

              <li>
                <Link to={'our-refund-policy'}>
                  Our Refund Policy
                </Link>
              </li>
            </ul>
            {/* sub menu */}
          </li>
        </Nav>
      </>
    );
  }
}

export default PartialNav;
