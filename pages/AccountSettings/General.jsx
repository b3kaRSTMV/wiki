import "./General.scss";
function General() {
  return (
    <div class="content">
      <div class="general">
        <h1>Account Settings</h1>
        <div class="nav">
          <a className="select" href="">
            General
          </a>
          <a href="">User</a>
          <a href="">Teams</a>
          <a href="">Subscription</a>
          <a href="">integration</a>
        </div>
        <hr />
        <div class="company_name">
          <h4>Company Name</h4>
          <div class="info">
            <p>
              This action can have unintended side effects. Renaming company name will also change
              the Company URL and will render all bookmarks to company pages invalid.
            </p>
          </div>
          <div class="footer_block">
            <input type="text" placeholder="Name" />
            <button>Save</button>
          </div>
          <hr />
        </div>
        <div class="company_logo">
          <h4>Company_logo</h4>
          <br />
          <input type="file" name="" id="" />
          <div class="upload_button">
            <div class="fakeblock"></div>
            <button>Upload</button>
          </div>
        </div>
        <hr />
        <div class="company_name">
          <h4>Company URL</h4>
          <div class="info">
            <p>
              This action can have unintended side effects. Renaming company URL will render all
              bookmarks to company pages invalid.
            </p>
          </div>
          <div class="footer_block">
            <input type="text" placeholder="Slug" />
            <button>Save</button>
          </div>
        </div>
        <hr />
        <div class="Google_Apps">
          <h4>Googls Apps for Work</h4>
          <div class="info">
            <p>
              Enable members of your Google Apps for Work account to sign in without requiring an
              invitation.
            </p>
          </div>
          <div class="footer_block">
            <input type="text" name="" id="" placeholder="" />
            <button>Save</button>
          </div>
          <p>Your Google Apps for Work domain name, e.g example.com.</p>
        </div>
        <hr />
        <div class="FileStoreageLocation">
          <h4>File Storage Location</h4>
          <div class="info">
            <p>
              Uploaded files are stored in Amazon S3 which has many regions around the world. Non-US
              locations may result in better performance for teams located outside North America.
              Files already uploaded will remain in their original location if you change this
              setting.
            </p>
          </div>
          <div class="footer_block">
            <select name="" id="">
              <option value="">US</option>
              <option value="">Asia</option>
              <option value="">Europe</option>
              <option value="">Africa</option>
            </select>
            <button>Save</button>
          </div>
        </div>
        <hr />
        <div class="DeleteAcc">
          <h4>Delete Account</h4>
          <p>
            Warning: This action is permanent. Deleting this account will permanently delete all
            pages and users in this account.
          </p>
          <a href="">Yes I understand, delete my account</a>
        </div>
      </div>
    </div>
  );
}
export default General;
