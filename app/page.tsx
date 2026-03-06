export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#0b0b0b", color: "white", minHeight: "100vh", padding: 40 }}>
      <h1 style={{ color: "#e10600" }}>PVV Next Generation Event</h1>

      <p>Ein geselliger Nachmittag mit Freunden und Familie der PVV AG.</p>

      <p>
        <b>Datum:</b> 03.07.2026<br/>
        <b>Start:</b> 15:00 Uhr
      </p>

      <h2>Location</h2>

      <p>
        Uhlenhorst<br/>
        Uhlenhorstweg 19<br/>
        45479 Mülheim an der Ruhr
      </p>

      <p>
        Am Uhlenhorst sowie gegenüber der Anlage stehen ausreichend Parkplätze zur Verfügung.
      </p>

      <iframe
        src="https://www.google.com/maps?q=Uhlenhorstweg+19,+45479+Mülheim+an+der+Ruhr&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      />

    </main>
  );
}
