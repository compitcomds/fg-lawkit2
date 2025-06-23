import { Layout } from "../../layouts/Layout";
import loginImg from "../../assets/img/others/login.jpg";
import { useRef, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import config from "../../lib/config";

export const JoinUs = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setIsSubmitting(true);
      const data = Object.fromEntries(new FormData(formRef.current));
      for (const value of Object.values(data)) {
        if (!value.trim()) throw new Error("All the fields are required.");
      }

      await axios.post(`${config.backendApiUrl}/api/query-forms`, {
        data: {
          name: data.name,
          email: data.email,
          description: data.description,
          other_meta: { phone: data.phone, linkedin: data.linkedin },
          group_id: "join-us",
          tenent_id: config.tenentId,
        },
      });

      toast.success("Successfully submitted the form");
      formRef.current.reset();
    } catch (error) {
      toast.error(
        error.message || "Error while submitting form. Please try again later.",
        { richColors: true }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout breadcrumbTitle={"Join Us"} breadcrumbSubtitle={"Join Us"}>
      <section>
        <div className="td_height_120 td_height_lg_80" />
        <div className="container">
          <div className="row td_gap_y_40">
            <div className="col-lg-6">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5">
                <form
                  ref={formRef}
                  onSubmit={onSubmit}
                  className="td_form_card_in"
                >
                  <h2 className="td_fs_36 td_mb_20">DM your proposal to us.</h2>
                  <hr />
                  <div className="td_height_30 td_height_lg_30" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Full Name *"
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Email *"
                    required
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Phone Number*"
                    required
                  />
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="LinkedIn *"
                    required
                  />
                  <textarea
                    id="description"
                    name="description"
                    className="td_form_field td_mb_30 td_medium td_white_bg"
                    placeholder="Why Join Us*"
                    rows="4"
                    required
                  />
                  {/* <div className="td_form_card_text_2 td_mb_50">
                    <div>
                      <Link
                        to="/forgot-password"
                        className="td_semibold td_accent_color"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="td_accent_color">
                      <div className="td_custom_checkbox">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                      </div>
                    </div>
                  </div> */}
                  <div className="td_form_card_bottom td_mb_25">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="td_btn td_style_1 td_radius_10 td_medium"
                    >
                      <span className="td_btn_in td_white_color td_accent_bg">
                        {isSubmitting ? "Submitting" : "Submit"}
                      </span>
                    </button>
                    {/* <p className="td_fs_20 mb-0 td_medium td_heading_color">
                      or sign up with
                    </p>
                    <div className="td_form_social td_fs_20">
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-apple"></i>
                      </a>
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-google"></i>
                      </a>
                      <a href="#" className="td_center">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </div> */}
                  </div>
                  {/* <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0">
                    Don&apos;t Have an Account? <Link to="/signup">Sign up</Link>
                  </p> */}
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="td_sign_thumb">
                <img
                  src={loginImg}
                  alt="Login"
                  className="w-100 td_radius_10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="td_height_120 td_height_lg_80" />
      </section>
    </Layout>
  );
};
