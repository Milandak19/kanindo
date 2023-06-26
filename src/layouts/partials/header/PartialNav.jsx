import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function PartialNav() {
  const [width] = useWindowSize();

  return (
    <>
      {width > 991 ? (
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
            <Link
              className="nav-link"
              style={{ cursor: 'pointer' }}
              to={(location) => location.pathname}
            >
              Visa Services
            </Link>
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
            <Link
              className="nav-link"
              style={{ cursor: 'pointer' }}
              to={(location) => location.pathname}
            >
              Imigration Services
            </Link>
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
            <Link
              className="nav-link"
              style={{ cursor: 'pointer' }}
              to={(location) => location.pathname}
            >
              Company Establishment
            </Link>
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
            <Link
              className="nav-link"
              style={{ cursor: 'pointer' }}
              to={(location) => location.pathname}
            >
              Terms & Conditions
            </Link>
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
                <Link to={'/our-refund-policy'}>
                  Our Refund Policy
                </Link>
              </li>
            </ul>
            {/* sub menu */}
          </li>
        </Nav>
      ) : (
        <Nav className="me-auto" style={{ paddingBottom: '10px' }}>
          <Nav.Link className="nav-item">
            <Link className="nav-link mobile-nav-item" to={'/'}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link className="nav-link mobile-nav-item" to={'/about'}>
              About Us
            </Link>
          </Nav.Link>
          <NavDropdown
            className="nav-item"
            title={
              <Nav.Link className="nav-link mobile-nav-item title-dropdown">
                Visa Service
              </Nav.Link>
            }
          >
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Working%20Visa'}
              >
                Working Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Investor%20Visa'}
              >
                Investor Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Dependent%20Visa'}
              >
                Dependent Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Single%20Entry%20Visa'}
              >
                Single Entry Visa - B211
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Single%20Entry%20Visa%20Extension'}
              >
                Single Entry Visa Extension
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Multiple%20Entry%20Visa'}
              >
                Multiple Entry Visa - D212
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Visa%20On%20Arrival'}
              >
                Visa On Arrival (VOA) Extension
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Calling%20Visa%20Indonesia'}
              >
                Calling Visa Indonesia
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Second%20Home%20Visa'}
              >
                Second Home Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Spouse%20Visa'}
              >
                Spouse Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Study%20Visa'}
              >
                Study Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Freelance%20Work%20Visa'}
              >
                Freelance Work Visa (Kitas)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Citizenship'}
              >
                Citizenship
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/visa-service/Permanent%20Stay%20Visa'}
              >
                Permanent Stay Visa (Kitap)
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="nav-item"
            title={
              <Nav.Link className="nav-link mobile-nav-item title-dropdown">
                Immigration Service
              </Nav.Link>
            }
          >
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/immigrants/VIP%20Airport%20Services'}
              >
                VIP Airport Services
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/immigrants/Overstay%20Settlement'}
              >
                Overstay Settlement
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/immigrants/Deportation%20Clearance'}
              >
                Deportation Clearance
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={
                  '/immigrants/Police%20Clearance%20Certificate%20(SKCK)'
                }
              >
                Police Clearance Certificate (SKCK)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={
                  '/immigrants/Travel%20Permit%20Certificate%20(SKJ)'
                }
              >
                Travel Permit Certificate (SKJ)
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/immigrants/Immigration%20Documents'}
              >
                Immigration Documents
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/immigrants/Other%20Important%20Documents'}
              >
                Other Important Documents
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="nav-item"
            title={
              <Nav.Link className="nav-link mobile-nav-item title-dropdown">
                Company Establishment
              </Nav.Link>
            }
          >
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/PMA%20Company%20Establishment'}
              >
                PMA Company Establishment
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/PT%20Company%20Establishment'}
              >
                PT Company Establishment
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/CV%20Company%20Establishment'}
              >
                CV Company Establishment
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/Respresentative%20Office%20Setup'}
              >
                Respresentative Office Setup
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/Foundation%20Setup'}
              >
                Foundation Setup
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/Business%20Licensing'}
              >
                Business Licensing
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={
                  '/company/Virtual%20&%20Serviced%20Office%20Space'
                }
              >
                Virtual & Serviced Office Space
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/Trademark%20Registration'}
              >
                Trademark Registration
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/company/Company%20Closure'}
              >
                Company Closure
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className="nav-item"
            title={
              <Nav.Link className="nav-link mobile-nav-item title-dropdown">
                Terms & Conditions
              </Nav.Link>
            }
          >
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/terms-conditions'}
              >
                Terms & Conditions
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/payment-method'}
              >
                Payment Method
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                className="sub-menu-mobile"
                to={'/our-refund-policy'}
              >
                Our Refund Policy
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )}
    </>
  );
}

export default PartialNav;
