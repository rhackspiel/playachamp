import { motion } from 'framer-motion'
import { Trophy, Calendar, Users, Play, Mail, Phone, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-100 to-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-400 grid place-items-center shadow-neon">
              <Trophy className="size-5 text-zinc-900" />
            </div>
            <span className="font-extrabold tracking-tight text-lg text-zinc-900">TFB Events</span>
            <Badge className="ml-2">Tischfußball</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#leistungen" className="hover:text-zinc-900">Leistungen</a>
            <a href="#referenzen" className="hover:text-zinc-900">Referenzen</a>
            <a href="#about" className="hover:text-zinc-900">Über uns</a>
            <a href="#kontakt" className="hover:text-zinc-900">Kontakt</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold">Jetzt anfragen</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-lime-400/25 blur-3xl" />
          <div className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs text-zinc-600 mb-4">
              <Sparkles className="size-4 text-lime-500" />
              Live-Action am Kickertisch • Österreichweit buchbar
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-zinc-900">
              Tischfußball, der Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">zum Beben bringt</span>
            </h1>
            <p className="mt-5 text-zinc-600 max-w-xl">
              Showmatches, Turnierorganisation & Moderation – alles aus einer Hand. Wir machen dein Firmenfest, deine Messe oder dein Stadtfest zum Erlebnis.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-lime-400 hover:bg-lime-300 text-black font-semibold">Jetzt Anfrage senden</Button>
              <Button size="lg" variant="outline">Demo-Video ansehen</Button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2"><Users className="size-4 text-lime-500" /> 5–500+ Teilnehmende</div>
              <div className="flex items-center gap-2"><Calendar className="size-4 text-lime-500" /> Flexible Buchung</div>
              <div className="flex items-center gap-2"><Trophy className="size-4 text-lime-500" /> Turniermodus optional</div>
            </div>
          </motion.div>

          {/* Visual Mockup Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }}>
            <Card className="border-zinc-200 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-zinc-900">
                  <Play className="size-5 text-lime-500" />
                  Event-Feeling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-xl overflow-hidden relative bg-gradient-to-tr from-zinc-100 to-zinc-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-28 w-28 rounded-full bg-lime-400/20 blur-2xl" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-white/80 backdrop-blur px-3 py-2 rounded-lg text-sm text-zinc-800">Showmatch • Best of 5</div>
                    <Button className="bg-lime-400 hover:bg-lime-300 text-black">Play</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Leistungen</h2>
          <Badge>Pakete kombinierbar</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Showmatches & Moderation',
              desc: 'Dynamische Live-Duelle, unterhaltsam moderiert – perfekt als Programmpunkt.',
              points: ['Publikums‑Einbindung', 'Musik & Atmosphäre', 'Flexible Dauer'],
            },
            {
              title: 'Turnierorganisation',
              desc: 'Komplett-Paket inkl. Turnierbaum, Regeln, Moderation und Siegerehrung.',
              points: ['Software & Brackets', 'Fairplay-Regeln', 'Medaillen/Pokale optional'],
            },
            {
              title: 'Promotion & Aktivierung',
              desc: 'Interaktive Station für Messen & Firmen – wir ziehen Menschen an den Tisch.',
              points: ['Lead-Generierung', 'Branding am Tisch', 'Giveaways optional'],
            },
          ].map((item, i) => (
            <Card key={i} className="hover:border-lime-300 transition border-zinc-200">
              <CardHeader>
                <CardTitle className="text-xl text-zinc-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">{item.desc}</p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-lime-400" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="w-full" variant="outline">Details anfragen</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* REFERENZEN */}
      <section id="referenzen" className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Referenzen</h2>
          <p className="text-zinc-500 text-sm">Auswahl vergangener Auftritte & Partner</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((n) => (
            <Card key={n}>
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(45deg, rgba(0,0,0,.04) 25%, transparent 25%, transparent 50%, rgba(0,0,0,.04) 50%, rgba(0,0,0,.04) 75%, transparent 75%, transparent)', backgroundSize:'24px 24px'}} />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm text-zinc-800">Event #{n}</div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-zinc-700">„Mega Stimmung, professionell organisiert – unser Team war begeistert!“</p>
                  <div className="mt-3 text-xs text-zinc-500">– Veranstalter: ACME GmbH</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Über uns</h2>
            <p className="mt-4 text-zinc-600">
              Wir sind leidenschaftliche Tischfußballer aus Wien und bringen professionelle Action auf dein Event.
              Von der Planung bis zur Durchführung – wir liefern ein rundes Erlebnis mit sportlichem Anspruch und viel Spaß.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                {label: 'Events', value: '50+'},
                {label: 'Teilnehmende', value: '5–500'},
                {label: 'Jahre Erfahrung', value: '10'},
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-2xl font-extrabold text-zinc-900">{s.value}</div>
                  <div className="text-xs text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-zinc-900">Formate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-zinc-700">
                  <li className="flex items-center justify-between">
                    <span>Firmenfest / Teambuilding</span>
                    <Badge className="bg-lime-400 text-black">Top</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Messe‑Aktivierung</span>
                    <Badge variant="outline">Beliebt</Badge>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Stadtfest / Public Event</span>
                    <Badge variant="outline">Neu</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl border border-lime-200 bg-gradient-to-r from-lime-300 to-emerald-300 p-8 md:p-10">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 20%, white 2px, transparent 2px)', backgroundSize:'24px 24px'}} />
            <div className="relative z-10 grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900">Bereit für Action auf deinem Event?</h3>
                <p className="mt-2 text-zinc-800">Sichere dir jetzt dein unverbindliches Angebot – wir melden uns schnell mit Details.</p>
              </div>
              <div className="flex md:justify-end">
                <Button size="lg" className="bg-black hover:bg-zinc-800 text-white">Unverbindlich anfragen</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Kontakt</h2>
            <p className="mt-4 text-zinc-600">Sag uns kurz, wann und wo dein Event stattfindet, und was du dir wünschst.</p>
            <div className="mt-6 space-y-3 text-zinc-700">
              <div className="flex items-center gap-2"><Mail className="size-4 text-lime-500" /> booking@tfb-events.at</div>
              <div className="flex items-center gap-2"><Phone className="size-4 text-lime-500" /> +43 660 000 0000</div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Danke! Deine Anfrage wurde (Demo) gesendet.'); }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Dein Name" />
                  <Input placeholder="E‑Mail" type="email" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Eventdatum" type="date" />
                  <Input placeholder="Ort / Location" />
                </div>
                <Textarea placeholder="Kurzbeschreibung deines Events" className="min-h-28" />
                <Button className="bg-lime-400 hover:bg-lime-300 text-black font-semibold">Anfrage senden</Button>
                <p className="text-xs text-zinc-500">Mit dem Senden stimmst du der Verarbeitung deiner Daten gemäß Datenschutzerklärung zu.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} TFB Events – Tischfußball für Events</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-900">Impressum</a>
            <a href="#" className="hover:text-zinc-900">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
