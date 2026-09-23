import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { icons } from "@/lib/icons";
import { aboutFeatures } from "@/data/process";
import { ReferenceArtwork } from "./ReferenceArtwork";

export function AboutPreview() {
  return <section className="container-page home-about">
    <div className="about-copy"><span className="eyebrow">About UDY Healthcare</span><h2>Committed to Quality<br />Healthcare Solutions.</h2><p>At UDY Healthcare Private Limited, we are driven by a simple purpose – to make quality healthcare products accessible to more people. We focus on developing, marketing and distributing trusted pharmaceutical and wellness products that support healthier lives across every stage of life.</p><Button href="/about">Learn More <ArrowRight size={16} aria-hidden="true" /></Button></div>
    <ReferenceArtwork x={360} y={435} width={166} height={159} label="UDY Healthcare building illustration from the supplied design" className="about-art" />
    <ul className="about-features">{aboutFeatures.map(feature => { const Icon = icons[feature.icon]; return <li key={feature.title}><span className="feature-icon"><Icon size={24} aria-hidden="true" /></span><div><h3>{feature.title}</h3><p>{feature.description}</p></div></li>; })}</ul>
  </section>;
}
