import React from 'react';
import './index.css'

function Message() {
    return(
        <div className="message-page">
            <div className="message-page-nav">
                <a href="#4" className="message-page-nav-list message-page-nav-list-active">
                    <img src="http://localhost:3000/assets/img/logo.png" alt="" />
                    <div>
                    <div className="message-name">
                        <h3>Yosef Sahle</h3>
                        <p>Yet Neh</p>
                    </div>
                    <div className="message-detail">
                        <small>Mon</small>
                        <p>1</p>
                    </div>
                    </div>
                </a>
                <a href="#4" className="message-page-nav-list">
                    <img src="http://localhost:3000/assets/img/logo.png" alt="" />
                    <div>
                    <div className="message-name">
                        <h3>Abel Tadesse</h3>
                        <p>Derishalew Ber lay neng</p>
                    </div>
                    <div className="message-detail">
                        <small>Mon</small>
                        <p>2</p>
                    </div>
                    </div>
                </a>
                <a href="#4" className="message-page-nav-list">
                    <img src="http://localhost:3000/assets/img/logo.png" alt="" />
                    <div>
                    <div className="message-name">
                        <h3>Tadesse Ageru</h3>
                        <p>Last Price ?</p>
                    </div>
                    <div className="message-detail">
                        <small>Mon</small>
                        
                    </div>
                    </div>
                </a>
                <a href="#4" className="message-page-nav-list">
                    <img src="http://localhost:3000/assets/img/logo.png" alt="" />
                    <div>
                    <div className="message-name">
                        <h3>Chala Amenu</h3>
                        <p>Location Please</p>
                    </div>
                    <div className="message-detail">
                        <small>Mon</small>
                        <p>4</p>
                    </div>
                    </div>
                </a>
                <a href="#4" className="message-page-nav-list">
                    <img src="http://localhost:3000/assets/img/logo.png" alt="" />
                    <div>
                    <div className="message-name">
                        <h3>Admin</h3>
                        <p>Was That help full if not please let me k help and engoy your life thos ahdbiwbrg josuso sofnvsounfb onovnwr wnorinwor ojwnrvonw jwor</p>
                    </div>
                    <div className="message-detail">
                        <small>Mon</small>
                        
                    </div>
                    </div>
                </a>

                
            
            </div>
            <div className="message-page-content">
                <div className="message-page-content-main">
                    
                    <div className="my-messages">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, fugit dolorem fugiat animi eum nesciunt optio quam officia quaerat temporibus, quibusdam aut maxime laboriosam itaque voluptas veniam nihil harum.</p>
                    </div>
                    <div className="message-date">
                        <p>May 13</p>
                    </div>
                    <div className="other-messages">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, fugit dolorem fugiat animi eum nesciunt optio quam officia quaerat temporibus, quibusdam aut maxime laboriosam itaque voluptas veniam nihil harum.</p>
                    </div>
                    <div className="other-messages">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, fugit dolorem fugiat animi eum nesciunt optio quam officia quaerat temporibus, quibusdam aut maxime laboriosam itaque voluptas veniam nihil harum.</p>
                    </div>
                    <div className="other-messages">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, fugit dolorem fugiat animi eum nesciunt optio quam officia quaerat temporibus, quibusdam aut maxime laboriosam itaque voluptas veniam nihil harum.</p>
                    </div>
                    <div className="my-messages">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, fugit dolorem fugiat animi eum nesciunt optio quam officia quaerat temporibus, quibusdam aut maxime laboriosam itaque voluptas veniam nihil harum.</p>
                    </div>

                    <div className="my-messages">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremque, fugit dolorem fugiat animi eum nesciunt optio quam officia quaerat temporibus, quibusdam aut maxime laboriosam itaque voluptas veniam nihil harum.</p>
                    </div>
                </div>
                <div className="message-page-content-input">
                    <textarea name="" id="" placeholder='Message ...'></textarea>
                    <button><i className='fa-solid fa-message'></i></button>
                </div>
            </div>
        </div>
    );
}

export default Message;