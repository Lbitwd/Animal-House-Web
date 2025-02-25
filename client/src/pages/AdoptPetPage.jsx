import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PetsIcon from '@mui/icons-material/Pets';
import InboxIcon from '@mui/icons-material/Inbox';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PET } from '../queries/pet';
import Loader from '../components/Loader';
import noPet from '../assets/images/noPicturePet.png';
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE_PET } from '../mutations/petMutations';
import { useSelector } from 'react-redux';
import DonatePopup from '../components/DonatePopup';

const SinglePet = () => {
  const [picture, setPicture] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // 🔑 Popup state
  const id = useLocation().pathname.split('/')[2];
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PET, { variables: { id } });
  const [deletePet] = useMutation(DELETE_PET, {
    variables: { id },
    context: {
      isAdmin: user?.isAdmin,
      headers: { token: user?.token },
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  const deletePetRequest = async () => {
    try {
      const res = await deletePet();
      if (res.errors) throw new Error('Pet cannot be deleted at the moment.');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center text-secondary">
      <div className="p-3 sm:p-4 lg:p-6 max-w-screen-2xl w-full">
        <div className="flex justify-center relative lg:justify-between items-center rounded-xl mb-10">
          <Logo />
          <Navbar classes="lg:block hidden" dark={true} />
        </div>

        <Link to="/">
          <span className="flex gap-1 items-center text-blue-500 hover:underline">
            <KeyboardBackspaceIcon /> Back to home
          </span>
        </Link>

        {loading ? (
          <Loader />
        ) : (
          <div className="flex relative md:flex-row flex-col my-14 gap-2 sm:gap-4 lg:gap-8">
            {!loading && !error && (
              <>
                {/* Admin Delete Option */}
                {user?.isAdmin && (
                  <span
                    onClick={deletePetRequest}
                    className="absolute cursor-pointer right-6 top-0 font-medium text-xs text-stone-600 flex items-center flex-col"
                  >
                    <DeleteIcon
                      sx={{ fontSize: 38 }}
                      titleAccess="Delete Pet"
                      className="text-primary hover:scale-110"
                    />
                    Delete pet
                  </span>
                )}

                {/* Pet Images Section */}
                <div className="flex flex-col-reverse gap-2 items-center w-full md:w-6/12">
                  <div className="flex gap-2">
                    {data?.getPet?.pictures?.map((el, index) => (
                      <img
                        key={index}
                        onClick={() => setPicture(index)}
                        className="h-[80px] w-[80px] md:w-[120px] md:h-[120px] object-cover object-center my-4 rounded-xl cursor-pointer hover:opacity-80"
                        src={el.url}
                        alt="pet"
                      />
                    ))}
                  </div>
                  <img
                    className="rounded-xl w-[200px] h-[300px] sm:h-[450px] sm:w-[350px] lg:h-[600px] lg:w-[500px] object-cover object-center"
                    src={data?.getPet?.pictures?.[picture]?.url || noPet}
                    alt="pet"
                  />
                </div>

                {/* Pet Details Section */}
                <div className="w-full md:w-6/12">
                  <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl">
                    {data?.getPet?.name}
                  </h1>
                  <p className="max-w-[600px] text-xs sm:text-sm lg:text-base my-4 text-stone-600 tracking-wide">
                    {data?.getPet?.description}
                  </p>

                  {/* About Pet Section */}
                  <div className="flex flex-col items-center md:w-fit">
                    <h2 className="font-medium text-xs sm:text-sm lg:text-base my-4 sm:my-6 self-start">
                      About {data?.getPet?.name}:
                    </h2>

                    {/* Adoption Info */}
                    <div className="flex items-center w-full max-w-[450px] gap-4 p-4 border-[1px] hover:border-primary rounded-xl my-2 md:my-4">
                      <span className="p-1 sm:p-2 rounded-xl bg-primary/20 text-primary">
                        <PetsIcon />
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                          Adoption
                        </h3>
                        <p className="text-stone-600 text-xs sm:text-sm lg:text-base">
                          This pet is ready to be adopted anytime.
                        </p>
                      </div>
                    </div>

                    {/* Litter Info */}
                    <div className="flex items-center w-full max-w-[450px] gap-4 p-4 border-[1px] hover:border-primary rounded-xl my-2 md:my-4">
                      <span className="p-1 sm:p-2 rounded-xl bg-primary/20 text-primary">
                        <InboxIcon />
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                          Litter
                        </h3>
                        <p className="text-stone-600 text-xs sm:text-sm lg:text-base">
                          This pet {data?.getPet?.litterTrained ? 'is' : 'is not'} litter-trained by animal experts.
                        </p>
                      </div>
                    </div>

                    {/* Vaccination Info */}
                    <div className="flex items-center w-full max-w-[450px] gap-4 p-4 border-[1px] hover:border-primary rounded-xl my-2 md:my-4">
                      <span className="p-1 sm:p-2 rounded-xl bg-primary/20 text-primary">
                        <VaccinesIcon />
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                          Vaccinated
                        </h3>
                        <p className="text-stone-600 text-xs sm:text-sm lg:text-base">
                          {data?.getPet?.name} {data?.getPet?.vaccinated ? 'has' : 'does not have'} complete vaccinations.
                        </p>
                      </div>
                    </div>

                    {/* Donate and Adopt Buttons */}
                    <div className="flex gap-4 mt-6">
                      <Button
                        classes="bg-primary text-white px-6 py-3 min-w-[200px] rounded-lg shadow-md hover:bg-primary hover:text-white hover:scale-105 transition-transform"
                        text="Donate to My Care"
                        onClick={() => setShowPopup(true)} // 🔑 Opens popup
                      />
                      <Link to="/contact">
                        <Button
                        classes="bg-white border border-primary min-w-[200px] text-primary px-6 py-3 rounded-lg shadow-lg hover:bg-primary hover:text-white hover:scale-105 transition-all"
                        text="Adopt Me"
                      />
                      </Link>
                    </div>

                    {/* Donation Popup */}
                    {showPopup && <DonatePopup onClose={() => setShowPopup(false)} />}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePet;


