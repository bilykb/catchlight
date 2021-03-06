import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import UserAvatar from './UserAvatar'
import { useNavigate } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function UserMenu(props) {
  const {user} = props
  const navItemR = "md:my-0 my-7 md:ml-8 cursor-pointer text-2xl hover:text-gray-400 duration-300"
  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      localStorage.clear();
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button>
          <FontAwesomeIcon className={navItemR} icon={faCircleUser} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-pagebackground ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item as="div">
              <UserAvatar imageUrl={user.profile_picture}/>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-100 text-pagetxt' : 'text-pagetxt',
                    'block px-4 py-2 text-sm pointer-events-none'
                  )}
                >
                  Welcome {user.name}!
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-100 text-pagetxt' : 'text-pagetxt',
                    'block px-4 py-2 text-sm pointer-events-none'
                  )}
                >
                  {user.email}
                </div>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    onClick={handleLogout}
                    className={classNames(
                      active ? 'bg-searchmain text-pagetxt' : 'text-pagetxt',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}