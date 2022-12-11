import Modal from "react-bootstrap/Modal";
import { Header, Top, Bottom } from "./ProjectsElements";
export default function Details({ open, onClose, fullscreen, data }) {
  return (
    <>
      <Modal show={open} fullscreen={fullscreen} onHide={onClose}>
        <Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Header>

        <Modal.Body>
          <Top>
            <div>
              <p>Features</p>
              <ul>
                <li>
                  Website ideas are unique like the Themeforest website theme.
                </li>
                <li>
                  Implement email/ password (login/Register) based login system.
                  The registration form should have the name and once a user is
                  logged in, the user name and the logout button should appear
                  on the user menu in the dropdown which will log out the user
                  once clicked. Displaying images on the header.
                </li>
                <li>
                  If a user is logged in, he/she will unlock the private pages
                  and inside that, a normal user without an account system will
                  go to the login page.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  quis culpa voluptatum corrupti accusamus repellendus
                  laudantium praesentium recusandae quo! Quasi, neque veniam!
                  Facilis debitis nostrum, quos sunt fugit ullam velit!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, magni doloremque. Consectetur tempore dolores maiores,
                  maxime eligendi eius autem? Id recusandae perspiciatis, ipsum
                  harum quas quia rem eos quam quaerat.
                </li>
              </ul>
            </div>
            <div>
              <p>Features</p>
              <ul>
                <li>
                  Website ideas are unique like the Themeforest website theme.
                </li>
                <li>
                  Implement email/ password (login/Register) based login system.
                  The registration form should have the name and once a user is
                  logged in, the user name and the logout button should appear
                  on the user menu in the dropdown which will log out the user
                  once clicked. Displaying images on the header.
                </li>
                <li>
                  If a user is logged in, he/she will unlock the private pages
                  and inside that, a normal user without an account system will
                  go to the login page.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
                  quis culpa voluptatum corrupti accusamus repellendus
                  laudantium praesentium recusandae quo! Quasi, neque veniam!
                  Facilis debitis nostrum, quos sunt fugit ullam velit!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, magni doloremque. Consectetur tempore dolores maiores,
                  maxime eligendi eius autem? Id recusandae perspiciatis, ipsum
                  harum quas quia rem eos quam quaerat.
                </li>
              </ul>
            </div>
          </Top>
          <Bottom>
            <img src={data.img} alt="" />
          </Bottom>
        </Modal.Body>
      </Modal>
    </>
  );
}
