import { useState } from 'react';
import { Modal } from './Primitives';
import { serviceOptions } from '../data/content';

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const set = (key: keyof typeof form) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      onClose();
    }, 1800);
  };

  return (
    <Modal open={open} onClose={onClose} title="Success Starts Here!">
      <p className="mb-2">Turn your vision into reality with our white-label solutions and expert developers.</p>

      <form id="contactForm" onSubmit={submit} noValidate={false}>
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name*"
              required
              value={form.name}
              onChange={(e) => set('name')(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email*"
              required
              value={form.email}
              onChange={(e) => set('email')(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              placeholder="+99 087 *** ** ***"
              required
              value={form.phone}
              onChange={(e) => set('phone')(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              required
              value={form.service}
              onChange={(e) => set('service')(e.target.value)}
            >
              <option value="" disabled>
                Select Service
              </option>
              {serviceOptions.map((group) => (
                <optgroup label={group.label} key={group.label}>
                  {group.options.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              placeholder="Write your enquiry..."
              rows={5}
              value={form.message}
              onChange={(e) => set('message')(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-orange" disabled={sent}>
            {sent ? 'Sending…' : 'Get a FREE Consultation!'}
          </button>
        </div>
      </form>
    </Modal>
  );
}