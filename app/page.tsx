
export default function Page() {
  return (
    <main style={{fontFamily:"Arial, sans-serif", background:"#0b0b0b", color:"white", minHeight:"100vh"}}>

      <section style={{padding:"60px 20px", maxWidth:1100, margin:"0 auto"}}>
        <h1 style={{fontSize:48, fontWeight:800, color:"#e10600"}}>
          PVV Next Generation Event
        </h1>

        <p style={{fontSize:20, marginTop:20}}>
          Ein geselliger Nachmittag mit Freunden und Familie der PVV AG.
        </p>

        <p style={{marginTop:10}}>
          <b>Datum:</b> 03.07.2026<br/>
          <b>Start:</b> 15:00 Uhr
        </p>
      </section>

      <section style={{padding:"40px 20px", maxWidth:1100, margin:"0 auto"}}>
        <h2 style={{fontSize:32}}>Location</h2>

        <p style={{marginTop:15}}>
          Uhlenhorst<br/>
          Uhlenhorstweg 19<br/>
          45479 Mülheim an der Ruhr
        </p>

        <p style={{marginTop:10}}>
          Am Uhlenhorst sowie gegenüber der Anlage stehen ausreichend Parkplätze zur Verfügung.
        </p>

        <div style={{marginTop:20}}>
          <iframe
            src="https://www.google.com/maps?q=Uhlenhorstweg+19,+45479+Mülheim+an+der+Ruhr&output=embed"
            width="100%"
            height="350"
            style={{border:0}}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section style={{padding:"40px 20px", maxWidth:1100, margin:"0 auto"}}>
        <h2 style={{fontSize:32}}>Programm</h2>

        <p style={{marginTop:15}}>
          Für Musik, Essen und Getränke ist gesorgt.
        </p>

        <p>
          Der Uhlenhorst bietet für Kinder Tennis- und Hockey-Unterricht mit Trainern an.
        </p>
      </section>

      <section style={{padding:"40px 20px", maxWidth:1100, margin:"0 auto"}}>
        <h2 style={{fontSize:32}}>Über die PVV AG</h2>

        <p style={{marginTop:15, lineHeight:1.6}}>
          Die PVV AG mit Sitz in Essen ist ein unabhängiger Vermögensverwalter und persönlicher
          Ansprechpartner in allen Vermögensfragen. Das Leistungsspektrum umfasst unter anderem
          Vermögensverwaltung, Finanzplanung, Vermögenscontrolling, Fund Advisory sowie
          generationenübergreifende Vermögensstrukturierung für Privatpersonen, Familien,
          Stiftungen und institutionelle Investoren.
        </p>
      </section>

      <section style={{padding:"40px 20px", maxWidth:700, margin:"0 auto"}}>
        <h2 style={{fontSize:32}}>Anmeldung</h2>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style={{marginTop:20}}>

          <input name="Name" placeholder="Name"
            style={{width:"100%", padding:12, marginBottom:10}} />

          <input name="Email" type="email" placeholder="E-Mail Adresse"
            style={{width:"100%", padding:12, marginBottom:10}} />

          <input name="Personen" type="number" placeholder="Personenanzahl"
            style={{width:"100%", padding:12, marginBottom:10}} />

          <input name="Kinder" type="number" placeholder="Anzahl Kinder"
            style={{width:"100%", padding:12, marginBottom:10}} />

          <label>Kinder Alter:</label><br/>

          <label><input type="checkbox" name="Alter" value="0-3"/> 0-3</label><br/>
          <label><input type="checkbox" name="Alter" value="3-6"/> 3-6</label><br/>
          <label><input type="checkbox" name="Alter" value="6-10"/> 6-10</label><br/>
          <label><input type="checkbox" name="Alter" value="+10"/> +10</label><br/><br/>

          <button style={{
            background:"#e10600",
            color:"white",
            padding:"12px 20px",
            border:"none",
            fontWeight:600
          }}>
            Anmeldung senden
          </button>

        </form>

        <p style={{marginTop:10, fontSize:14}}>
          Hinweis: Ersetze YOUR_FORM_ID im Code durch deine Formspree Form-ID.
        </p>
      </section>

    </main>
  )
}
