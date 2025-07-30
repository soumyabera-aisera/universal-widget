import { Component, h } from '@stencil/core';

@Component({
  tag: 'aisera-universal-widget',
  styleUrl: 'aisera-universal-widget.css',
  shadow: true, // shadow: true encapsulates the styles to prevent them from leaking
})
export class AiseraUniversalWidget {

  render() {
    return (
      <div class="widget-wrapper">
        <header class="widget-header">
          <h1>Aisera Ticket Helper</h1>
        </header>

        <main class="widget-body">
          {/* Section 1: Summary */}
          <section class="widget-section">
            <h2>Summary</h2>
            <p>User is unable to access the VPN. They have tried restarting their machine and reconnecting to Wi-Fi. Error message: "Connection Failed: Unauthorized User".</p>
          </section>

          {/* Section 2: Aisera Answer */}
          <section class="widget-section">
            <h2>Aisera Answer</h2>
            <div class="answer-card">
              <h3>Reset VPN Credentials</h3>
              <p>The "Unauthorized User" error indicates a token mismatch. The most likely resolution is to reset the user's VPN credentials in the identity provider.</p>
              <a href="#" class="kb-link">KB Article #4815: How to reset VPN credentials</a>
            </div>
          </section>

          {/* Section 3: Next Best Action */}
          <section class="widget-section">
            <h2>Next Best Action</h2>
            <button class="action-button primary">Reset MFA Token</button>
            <button class="action-button">Create Sub-Ticket for Network Team</button>
          </section>

          {/* Section 4: Wrap Up */}
          <section class="widget-section">
            <h2>Wrap Up</h2>
            <div class="form-group">
              <label htmlFor="resolution-code">Resolution Code</label>
              <select id="resolution-code">
                <option>Credentials Reset</option>
                <option>User Error</option>
                <option>Escalated to Tier 2</option>
              </select>
            </div>
            <div class="form-group">
              <label htmlFor="notes">Resolution Notes</label>
              <textarea id="notes">User's VPN credentials were reset as per KB #4815. User confirmed they can now connect.</textarea>
            </div>
            <button class="action-button primary submit">Resolve Ticket</button>
          </section>

        </main>
      </div>
    );
  }
}