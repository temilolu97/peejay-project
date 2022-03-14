import React from 'react'
import styles from './Contact.module.css'
const Contact = () => {
  return (
    <div class={`container ${styles.contact_form} vh-100`}>
            <div class={styles.contact_image}>
                <div className="font-weight-bold font-weight-3" style={{fontSize:"x-large"}}>
                    <i class="fas fa-cubes fa ml-3" style={{color: "#ff6219"}}></i>Dashlot Foods
                </div>
            </div>
            <form method="post">
                <h3>Drop Us a Message</h3>
               <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtPhone" class="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" name="btnSubmit" class={`btn ${styles.btnContact}`} value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="form-group">
                            <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{width: "100%", height: "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Contact