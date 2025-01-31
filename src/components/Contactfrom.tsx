'use client';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { motion } from 'motion/react';
import React, { ChangeEvent, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { SelectGroup } from '@radix-ui/react-select';
import toast from 'react-hot-toast';
import { Check } from 'lucide-react';

interface objtype {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  Message: string;
  Service: string;
}
const Contactfrom = () => {
  const [status, setStatus] = useState('');
  const [success, setSuccess] = useState<boolean>(false);
  const [isloading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<objtype>({
    Name: '',
    Email: '',
    Phone: '',
    Address: '',
    Message: '',
    Service: '',
  });

  const inputHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handelSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast.error('Please input your name and email to continue');
      return;
    }

    const form = new FormData();
    const CurrentDate = new Date().toLocaleString();
    form.append('Name', formData?.Name);
    form.append('Email', formData?.Email);
    form.append('Phone', formData?.Phone);
    form.append('Address', formData?.Address);
    form.append('Message', formData?.Message);
    form.append('Service', formData?.Service);
    form.append('DateTime', CurrentDate);

    try {
      setLoading(true);
      const response = await fetch('https://getform.io/f/bollvdoa', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        setSuccess(true);
        setStatus('SuccessFully! Your message has been sent.');
        setFormData({
          Name: '',
          Email: '',
          Phone: '',
          Address: '',
          Message: '',
          Service: '',
        });
      } else {
        setStatus('Error! Unable to send your message.');
      }
    } catch (error) {
      console.error('Form submitting Error', error);
      setStatus('Error! Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="space-y-3 px-3">
        <h3 className="text-xl font-medium md:text-2xl text-textColor tracking-tight">
          Let&apos;s work together
        </h3>
        <p className=" max-w-full md:max-w-xl text-sm md:text-base font-normal tracking-tighter  text-textColor/90">
          Get in touch with us for professional services! Fill out the form with
          your details and requirements, and our team will reach out to assist
          you promptly.
        </p>

        {success ? (
          <>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: 'backOut' }}
              className="flex flex-col items-center justify-center gap-3 py-6"
            >
              <div className="border border-lightSkey/50 box-shadow w-20 h-20 rounded-full flex items-center justify-center text-lightSky">
                <Check className="w-10 h-10 text-lightSkey" />
              </div>
              <h2 className="text-2xl pt-1 tracking-tight font-JetBrains  md:text-4xl text-stroke group-hover/box:text-stroke-hover text-transparent ">
                Thank You😊!
              </h2>
              <p className="text-sm md:text-base font-medium text-center text-textColor/90">
                {status}
              </p>
            </motion.div>
          </>
        ) : (
          <>
            <form action="" className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  name="Name"
                  id="Name"
                  required
                  value={formData?.Name}
                  onChange={inputHandler}
                  disabled={isloading}
                  placeholder="Your Name"
                />
                <Input
                  type="email"
                  name="Email"
                  id="Email"
                  value={formData?.Email}
                  onChange={inputHandler}
                  disabled={isloading}
                  required
                  placeholder="you@gmail.com"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  name="Phone"
                  id="Phone"
                  value={formData?.Phone}
                  onChange={inputHandler}
                  disabled={isloading}
                  required
                  placeholder="Phone number"
                />
                <Input
                  type="text"
                  name="Address"
                  id="Address"
                  value={formData?.Address}
                  onChange={inputHandler}
                  disabled={isloading}
                  required
                  placeholder="Address"
                />
              </div>
              <Textarea
                className="resize-none"
                name="Message"
                placeholder="Text area"
                value={formData?.Message}
                onChange={inputHandler}
                disabled={isloading}
                rows={5}
                required
              />
              <Select onValueChange={handelChange} disabled={isloading}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-bodyColor text-textColor/80 border border-lightSkey/10 data-[state=active]:bg-lightSkey/40 data-[state=active]:text-textColor">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web devolopment">
                      Web Devolopment
                    </SelectItem>
                    <SelectItem value="softwar management">
                      Softwar Managemnet
                    </SelectItem>
                    <SelectItem value="it support">It Support</SelectItem>
                    <SelectItem value="computer operator">
                      Computer Operator
                    </SelectItem>
                    <SelectItem value="industry management">
                      Industry ManageMent
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button
                type="submit"
                disabled={isloading}
                onClick={handelSubmit}
                className="w-full text-sm md:text-base py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 border-lightSkey/10 hover:bg-lightSkey/30 hover:border-lightSkey/10  hoverEffect"
              >
                {isloading ? 'Submitting message...' : 'Send Message'}
              </Button>
            </form>
          </>
        )}
      </section>
    </>
  );
};

export default Contactfrom;
