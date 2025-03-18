import React, { useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  useEffect(() => {
    document.title = 'Monroe Township District #1 Fire Commissioners';
  }, []);

    const [isOpen, setIsOpen] = useState(false)
    const [IsInspectionOpen, setIsInspectionOpen] = useState(false)
    const InspectionOption = ['Smoke Detector Application', 'Smoke Detector Inspection Fees', 'Smoke Detector Inspection Payment Form', 'Business Registration Permit Fees Payment Form', 'Fire Prevention Fees', 'Smoke Detector Instructions', 'Extinguisher Requirements', '2019 Smoke Detector Law And Requirements'];
    const selectedInspectionOption = "";
    const PreventionOption = ['Fire Prevention Lessons', 'Video Reading Of "I Drive A Fire Truck"', 'Fire Prevention - General','Fire Prevention Checklist', 'Fire Safety Trailer Presentation', 'Spring / Summer Tips', 'Fireworks Safety', 'Winter Tips', 'Op: Holy Smokes', 'Get Out Alive', 'Fire Is By Frank Fields', 'Smoke Alarm Safety'];
    const selectedPreventionOption = "";
    const navigate = useNavigate();
    const handleChildClick = (e) => {
      e.stopPropagation(); // Prevents the click from bubbling up to the parent
      console.log('Child clicked');
    };
    function setSelectedInspectionOption(option){
      switch (option) {
        case 'Smoke Detector Application':
          navigate('/smoke-detector-application');
          closeInspectionMenu();
          break;
        case 'Smoke Detector Inspection Fees':
          navigate('/smoke-detector-inspection-fees');
          closeInspectionMenu();
          break;
        case 'Smoke Detector Inspection Payment Form':
          navigate('/smoke-detector-inspection-payment-form');
          closeInspectionMenu();
          break;
        case 'Business Registration Permit Fees Payment Form':
          navigate('/business-registration-permit-fees-payment-form');
          closeInspectionMenu();
          break;
        case 'Fire Prevention Fees':
          navigate('/fees');
          closeInspectionMenu();
          break;
        case 'Smoke Detector Instructions':
          navigate('/smoke-detector-instructions');
          closeInspectionMenu();
          break;
        case 'Extinguisher Requirements':
          navigate('/fire-extinguisher-instructions');
          closeInspectionMenu();
          break;
        case '2019 Smoke Detector Law And Requirements':
          navigate('/smoke-requirements');
          closeInspectionMenu();
          break;
        default:
          // Handle invalid input or redirect to a default route
          navigate('/');
      }
    }
    const navigateExternal = (url) => {
      window.location.href = url;
    };
    function setSelectedPreventionOption(option){
      switch (option) {
        case 'Fire Prevention Lessons':
          navigate('/fire-prevention-lessons');
          closeInspectionMenu();
          break;
        case 'Video Reading Of "I Drive A Fire Truck"':
          navigate('/reading');
          closeInspectionMenu();
          break;
        case 'Fire Prevention - General':
          navigate('/general-prevention');
          closeInspectionMenu();
          break;
        case 'Fire Prevention Checklist':
          navigate('/fire-prevention-checklist');
          closeInspectionMenu();
          break;
        case 'Fire Safety Trailer Presentation':
          navigate('/fire-safety-trailer-presentation');
          closeInspectionMenu();
          break;
        case 'Spring / Summer Tips':
          navigate('/spring-and-summer-fire-prevention-tips');
          closeInspectionMenu();
          break;
        case 'Fireworks Safety':
          navigate('/fireworks');
          closeInspectionMenu();
          break;
        case 'Winter Tips':
          navigate('/winter-fire-prevention-tips');
          closeInspectionMenu();
          break;
        case 'Op: Holy Smokes':
          navigate('/operation-holy-smokes');
          closeInspectionMenu();
          break;
        case 'Get Out Alive':
          navigate('/get-out-alive');
          closeInspectionMenu();
          break;
        case 'Fire Is By Frank Fields':
          navigateExternal('http://www.njfiresafety.com/');
          closeInspectionMenu();
          break;
        case 'Smoke Alarm Safety':
          navigateExternal('https://www.nj.gov/dca/divisions/dfs/publications/publication/fs_facts_smoke_alarm_safety.pdf');
          closeInspectionMenu();
          break;

        default:
          // Handle invalid input or redirect to a default route
          navigate('/');
      }
    }
    const closeMenu = () => {
        setIsOpen(false);
    }

    const closeInspectionMenu = () => {
        console.log("Closing")
        if (IsInspectionOpen || isOpen) {
            closeMenu()
            setIsInspectionOpen(false);
        } 
        
    }
  
    return (
      <nav onClick={closeInspectionMenu} className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center ">
              <div className="custom-logo">
              <img class="custom2" style={{margintop: 1000}} width="200px" height="200px"
                        src="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/monroe-patch-better.png"
                        alt=""
                      />
                      
                <Link to="/" className="text-white text-lg font-semibold">
                
                </Link>
              </div>
              <center>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/" className="custom"
                  >
                    Home
                  </NavLink>

                  <Dropdown id="dropdown" value={selectedInspectionOption} onChange={(e) => setSelectedInspectionOption(e.value)} options={InspectionOption} optionLabel="name" 
                    placeholder="Smoke Inspection Info" className="custom" />


                  <Dropdown id="dropdown" value={selectedPreventionOption} onChange={(e) => setSelectedPreventionOption(e.value)} options={PreventionOption} optionLabel="name" 
                    placeholder="Fire Prevention Tips" className="custom" />


                  
                  <NavLink to="/contact" className="custom">
                    Contact
                  </NavLink>
                  <NavLink to="/links" className="custom">
                      Links
                  </NavLink>
                  
                
                </div>
              </div>
              </center>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    
                  </div>
                  {IsInspectionOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >

                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="block h-6 w-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="custom4"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          
          <div className="custom5 ml-20 space-x-0">
            <center>
            <img class="" style={{margintop: 1000}} width="200px" height="200px"
                        src="https://s3.us-east-2.amazonaws.com/fireapparatusrepair.com/monroe-patch-better.png"
                        alt=""
                      />
            <NavLink to="/" className="custom">
              Home
              <br></br>
            </NavLink>

            <Dropdown  onClick={handleChildClick} value={selectedInspectionOption} onChange={(e) => setSelectedInspectionOption(e.value)} options={InspectionOption} optionLabel="name" 
              placeholder="Financial Information" className="custom" /> <p> </p>


            <Dropdown  onClick={handleChildClick} value={selectedPreventionOption} onChange={(e) => setSelectedPreventionOption(e.value)} options={PreventionOption} optionLabel="name" 
              placeholder="Meeting Information" className="custom" />

            <br></br>
          
            <NavLink to="/contact" className="custom">
              Contact
            </NavLink>
            <p></p>
            <NavLink to="/links" className="custom">
                Links
            </NavLink>
            
            </center>
          </div>
        )}
      </nav>
    )
  }