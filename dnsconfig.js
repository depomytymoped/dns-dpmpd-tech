// dnsconfig.js - Generated from Hetzner export for dpmpd.tech
var REG_NONE = NewRegistrar("none");
var DSP_DIGITALOCEAN = NewDnsProvider("digitalocean");

// TTL configurations
var DEFAULT_TTL = 300;
var SHORT_TTL = 60;

D(
  "dpmpd.tech",
  REG_NONE,
  DnsProvider(DSP_DIGITALOCEAN),

  // === ROOT DOMAIN ===
  A("@", "8.8.8.8", TTL(DEFAULT_TTL)),

  // === INFRASTRUCTURE SERVERS ===
  A("abyss", "178.62.225.180", TTL(DEFAULT_TTL)),
  AAAA("abyss", "2a03:b0c0:2:d0::11ef:b001", TTL(DEFAULT_TTL)),

  A("ai", "5.44.252.165", TTL(SHORT_TTL)),

  A("ai-agents", "5.44.252.165", TTL(SHORT_TTL)),

  A("aq", "135.181.118.58", TTL(DEFAULT_TTL)),
  AAAA("aq", "2a01:4f9:4b:1e08::2", TTL(DEFAULT_TTL)),

  A("kms", "164.92.233.76", TTL(DEFAULT_TTL)),

  A("lmps0080", "164.90.232.230", TTL(DEFAULT_TTL)),
  AAAA("lmps0080", "2a03:b0c0:3:d0::1873:1", TTL(DEFAULT_TTL)),

  A("monitor", "65.108.238.105", TTL(DEFAULT_TTL)),
  AAAA("monitor", "2a01:4f9:1a:b244::2", TTL(DEFAULT_TTL)),

  A("ovhbackup", "51.77.200.79", TTL(DEFAULT_TTL)),

  A("relayer", "148.251.89.143", TTL(DEFAULT_TTL)),
  AAAA("relayer", "2a01:4f8:202:6486::2", TTL(DEFAULT_TTL)),

  A("salt-master", "178.62.225.180", TTL(DEFAULT_TTL)),
  AAAA("salt-master", "2a03:b0c0:2:d0::11ef:b001", TTL(DEFAULT_TTL)),

  A("validator", "57.128.75.17", TTL(DEFAULT_TTL)),

  // === API SUBDOMAIN (api.cc) ===
  A("api.cc", "65.108.251.57", TTL(DEFAULT_TTL)),
  A("rpc.cc", "65.108.251.57", TTL(DEFAULT_TTL)),

  // === SSL CERTIFICATE VALIDATION (ACME) ===
  TXT(
    "_acme-challenge",
    "yAA4-dtpJTclldaFlYQNFx220Lwf8Bj8GmpXrzpeHsw",
    TTL(SHORT_TTL),
  ),
  TXT(
    "_acme-challenge.api.cc",
    "ncLqTH0dC-Os-gWYxxRELwvFMM-xLAzGe6qYSH65W0A",
    TTL(SHORT_TTL),
  ),
  TXT(
    "_acme-challenge.rpc.cc",
    "yAA4-dtpJTclldaFlYQNFx220Lwf8Bj8GmpXrzpeHsw",
    TTL(SHORT_TTL),
  ),
);
