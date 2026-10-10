/* Static client-side API mock for standalone GitHub Pages Agent Tracer Sandbox.
 * Intercepts /api/conversations, /api/transcript, /api/telemetry, /api/subagents_status,
 * /api/step_full, and /api/update-status so the full Agent Tracer workspace runs 100%
 * client-side with zero backend servers or cloud credentials.
 */
(function () {
  const CONV_PR_AUDIT = 'a1000000-0000-4000-8000-000000000001';
  const CONV_SUB_APPSEC = 'b1000000-0000-4000-8000-000000000001';
  const CONV_SUB_PERF = 'b2000000-0000-4000-8000-000000000002';
  const CONV_TERRAFORM = 'a2000000-0000-4000-8000-000000000002';
  const CONV_COMPACTION = 'a3000000-0000-4000-8000-000000000003';

  const urlParams = new URLSearchParams(window.location.search);
  const initialScenario = urlParams.get('scenario');
  const defaultConvId =
    initialScenario === 'network'
      ? CONV_TERRAFORM
      : initialScenario === 'compaction'
      ? CONV_COMPACTION
      : CONV_PR_AUDIT;

  if (!window.sidecar) {
    window.sidecar = { conversationId: defaultConvId };
  }

  const TRANSCRIPTS = {
    [CONV_PR_AUDIT]: [
      {
        step_index: 0,
        type: 'USER_INPUT',
        source: 'USER_EXPLICIT',
        status: 'DONE',
        created_at: '2026-10-10T09:14:02Z',
        content:
          '<USER_REQUEST>Audit payment-gateway/src/webhook_handler.py for signature timing vulnerabilities and duplicate delivery race conditions, run pytest, and patch any issues found.</USER_REQUEST>'
      },
      {
        step_index: 1,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:04Z',
        thinking:
          'Inspecting Webhook Handler and Spawning Parallel Reviewers\nLet us read payment-gateway/src/webhook_handler.py and fan out two parallel subagents: one for cryptographic HMAC verification and one for concurrent Redis idempotency locking.',
        content: '',
        tool_calls: [
          {
            name: 'view_file',
            args: {
              AbsolutePath: '/workspace/payment-gateway/src/webhook_handler.py',
              StartLine: 1,
              EndLine: 95,
              toolSummary: 'Read webhook_handler.py implementation',
              toolAction: 'Reading payment-gateway/src/webhook_handler.py'
            }
          },
          {
            name: 'invoke_subagent',
            args: {
              toolSummary: 'Launch parallel security and concurrency reviewers',
              toolAction: 'Launching parallel AppSec and Concurrency subagents',
              Subagents: [
                {
                  Role: 'AppSec Auditor',
                  TypeName: 'sec-reviewer',
                  Prompt: 'Audit HMAC signature verification and header parsing in payment-gateway/src/webhook_handler.py.'
                },
                {
                  Role: 'Concurrency Profiler',
                  TypeName: 'dev-reviewer',
                  Prompt: 'Check duplicate event ID locking under concurrent webhook retries in webhook_handler.py.'
                }
              ]
            }
          }
        ]
      },
      {
        step_index: 2,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:05Z',
        content:
          'Created At: 2026-10-10T09:14:04.100Z\nCompleted At: 2026-10-10T09:14:04.410Z\nFile Path: `file:///workspace/payment-gateway/src/webhook_handler.py`\nTotal Lines: 92\nShowing lines 1 to 42\n1: import hashlib\n2: import hmac\n3: \n4: def verify_signature(payload: bytes, sig_header: str, secret: str) -> bool:\n5:     expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()\n6:     return sig_header == expected  # vulnerable to byte-by-byte timing comparison\n7:\n8: def process_event(redis_client, event_id: str, payload: dict) -> dict:\n9:     if redis_client.get(f"seen:{event_id}"):\n10:         return {"status": "duplicate"}\n11:     redis_client.set(f"seen:{event_id}", "1", ex=86400)'
      },
      {
        step_index: 3,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:08Z',
        content:
          'Created At: 2026-10-10T09:14:04.450Z\nCompleted At: 2026-10-10T09:14:08.190Z\nSpawned 2 child subagents:\n- Role: AppSec Auditor\n  Conversation ID: ' +
          CONV_SUB_APPSEC +
          '\n  Status: DONE (found non-constant-time == on HMAC digest at line 6)\n- Role: Concurrency Profiler\n  Conversation ID: ' +
          CONV_SUB_PERF +
          '\n  Status: DONE (found TOCTOU race between GET and SET on line 9; recommend atomic SET NX)'
      },
      {
        step_index: 4,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:09Z',
        thinking:
          'Running Existing Test Suite to Reproduce Failures\nBoth subagents reported clear findings. Let us execute pytest now to capture the failing security test baseline before patching.',
        content: '',
        tool_calls: [
          {
            name: 'run_command',
            args: {
              CommandLine: 'pytest tests/test_webhook_handler.py -q',
              Cwd: '/workspace/payment-gateway',
              toolSummary: 'Run webhook security and concurrency test suite',
              toolAction: 'Running pytest on tests/test_webhook_handler.py'
            }
          }
        ]
      },
      {
        step_index: 5,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:11Z',
        content:
          'Created At: 2026-10-10T09:14:09.200Z\nCompleted At: 2026-10-10T09:14:11.050Z\nThe command exited with code 1.\nOutput:\nFFFF............                                                         [100%]\nFAILED tests/test_webhook_handler.py::test_constant_time_hmac - AssertionError: Direct == operator used on digest\nFAILED tests/test_webhook_handler.py::test_parallel_duplicate_delivery - AssertionError: Expected 1 ledger charge, got 2 under 8-thread race\n2 failed, 12 passed in 1.62s'
      },
      {
        step_index: 6,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:13Z',
        thinking:
          'Applying Constant-Time Digest Check and Atomic Redis Lock\nReplacing sig_header == expected with hmac.compare_digest and converting non-atomic GET/SET into atomic redis_client.set(..., nx=True, ex=86400).',
        content: '',
        tool_calls: [
          {
            name: 'replace_file_content',
            args: {
              TargetFile: '/workspace/payment-gateway/src/webhook_handler.py',
              StartLine: 4,
              EndLine: 12,
              TargetContent:
                'def verify_signature(payload: bytes, sig_header: str, secret: str) -> bool:\n    expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()\n    return sig_header == expected\n\ndef process_event(redis_client, event_id: str, payload: dict) -> dict:\n    if redis_client.get(f"seen:{event_id}"):\n        return {"status": "duplicate"}\n    redis_client.set(f"seen:{event_id}", "1", ex=86400)',
              ReplacementContent:
                'def verify_signature(payload: bytes, sig_header: str, secret: str) -> bool:\n    expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()\n    return hmac.compare_digest(sig_header.encode("utf-8"), expected.encode("utf-8"))\n\ndef process_event(redis_client, event_id: str, payload: dict) -> dict:\n    claimed = redis_client.set(f"seen:{event_id}", "1", nx=True, ex=86400)\n    if not claimed:\n        return {"status": "duplicate"}',
              toolSummary: 'Patch timing-safe HMAC check and atomic Redis NX lock',
              toolAction: 'Patching payment-gateway/src/webhook_handler.py'
            }
          },
          {
            name: 'run_command',
            args: {
              CommandLine: 'pytest tests/test_webhook_handler.py -q',
              Cwd: '/workspace/payment-gateway',
              toolSummary: 'Re-run webhook test suite after patch',
              toolAction: 'Verifying patch with pytest'
            }
          }
        ]
      },
      {
        step_index: 7,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:14Z',
        content:
          'Created At: 2026-10-10T09:14:13.100Z\nCompleted At: 2026-10-10T09:14:13.380Z\nThe following changes were made by the replace_file_content tool to: /workspace/payment-gateway/src/webhook_handler.py.\n[diff_block_start]\n@@ -4,9 +4,9 @@\n def verify_signature(payload: bytes, sig_header: str, secret: str) -> bool:\n     expected = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()\n-    return sig_header == expected\n+    return hmac.compare_digest(sig_header.encode("utf-8"), expected.encode("utf-8"))\n \n def process_event(redis_client, event_id: str, payload: dict) -> dict:\n-    if redis_client.get(f"seen:{event_id}"):\n+    claimed = redis_client.set(f"seen:{event_id}", "1", nx=True, ex=86400)\n+    if not claimed:\n         return {"status": "duplicate"}\n-    redis_client.set(f"seen:{event_id}", "1", ex=86400)\n[diff_block_end]'
      },
      {
        step_index: 8,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:15Z',
        content:
          'Created At: 2026-10-10T09:14:13.420Z\nCompleted At: 2026-10-10T09:14:14.180Z\nThe command exited with code 0.\nOutput:\n..............                                                           [100%]\n14 passed in 0.34s'
      },
      {
        step_index: 9,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:16Z',
        thinking: '',
        content:
          'Completed security and concurrency audit on `payment-gateway/src/webhook_handler.py`:\n\n- Replaced direct string comparison (`==`) on SHA-256 digests with `hmac.compare_digest` to prevent byte-by-byte timing side channels.\n- Replaced the two-step `GET` then `SET` check with an atomic `SET ... NX EX 86400` idempotency guard so concurrent retries never double-charge.\n- Verified all 14 unit and multi-threaded stress tests pass (`0.34s`).',
        tool_calls: []
      }
    ],

    [CONV_SUB_APPSEC]: [
      {
        step_index: 0,
        type: 'USER_INPUT',
        source: 'USER_EXPLICIT',
        status: 'DONE',
        created_at: '2026-10-10T09:14:04Z',
        content:
          '<USER_REQUEST>Audit HMAC signature verification and header parsing in payment-gateway/src/webhook_handler.py.</USER_REQUEST>'
      },
      {
        step_index: 1,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:05Z',
        thinking:
          'Scanning Cryptographic Signature Verification\nChecking how webhook signatures are compared against computed HMAC digests.',
        content: '',
        tool_calls: [
          {
            name: 'view_file',
            args: {
              AbsolutePath: '/workspace/payment-gateway/src/webhook_handler.py',
              StartLine: 1,
              EndLine: 30,
              toolSummary: 'Inspect HMAC digest check in webhook_handler.py',
              toolAction: 'Inspecting cryptographic digest comparison'
            }
          }
        ]
      },
      {
        step_index: 2,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:06Z',
        content:
          'Created At: 2026-10-10T09:14:05.100Z\nCompleted At: 2026-10-10T09:14:05.350Z\nFile Path: `file:///workspace/payment-gateway/src/webhook_handler.py`\n6: return sig_header == expected'
      },
      {
        step_index: 3,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:07Z',
        thinking: '',
        content:
          'Finding CWE-208 (Observable Timing Discrepancy): Line 6 uses standard `==` string equality on hex SHA-256 digests instead of `hmac.compare_digest`. Replace with constant-time byte comparison.',
        tool_calls: []
      }
    ],

    [CONV_SUB_PERF]: [
      {
        step_index: 0,
        type: 'USER_INPUT',
        source: 'USER_EXPLICIT',
        status: 'DONE',
        created_at: '2026-10-10T09:14:04Z',
        content:
          '<USER_REQUEST>Check duplicate event ID locking under concurrent webhook retries in webhook_handler.py.</USER_REQUEST>'
      },
      {
        step_index: 1,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:05Z',
        thinking:
          'Checking Redis Idempotency Key Pattern\nInspecting lines 8-15 for check-then-act race windows under simultaneous webhook delivery.',
        content: '',
        tool_calls: [
          {
            name: 'view_file',
            args: {
              AbsolutePath: '/workspace/payment-gateway/src/webhook_handler.py',
              StartLine: 8,
              EndLine: 25,
              toolSummary: 'Check Redis idempotency pattern in process_event',
              toolAction: 'Reading process_event Redis calls'
            }
          }
        ]
      },
      {
        step_index: 2,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:06Z',
        content:
          'Created At: 2026-10-10T09:14:05.200Z\nCompleted At: 2026-10-10T09:14:05.510Z\n9: if redis_client.get(f"seen:{event_id}"):\n10: return {"status": "duplicate"}\n11: redis_client.set(f"seen:{event_id}", "1", ex=86400)'
      },
      {
        step_index: 3,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-10T09:14:08Z',
        thinking: '',
        content:
          'Finding CWE-367 (TOCTOU Race Condition): Two concurrent workers checking `redis_client.get(...)` simultaneously both observe `None` before either writes the key. Replace with single atomic `redis_client.set(key, "1", nx=True, ex=86400)`.',
        tool_calls: []
      }
    ],

    [CONV_TERRAFORM]: [
      {
        step_index: 0,
        type: 'USER_INPUT',
        source: 'USER_EXPLICIT',
        status: 'DONE',
        created_at: '2026-10-09T14:20:00Z',
        content:
          '<USER_REQUEST>Validate two-VPC egress proxy firewall posture in infra/modules/egress_proxy/ and fix any overly permissive CIDR rules.</USER_REQUEST>'
      },
      {
        step_index: 1,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:03Z',
        thinking:
          'Inspecting Terraform Modules Across Four Network Files\nReading main.tf, firewall.tf, nat.tf, and outputs.tf in parallel to verify outbound NAT subnet scoping.',
        content: '',
        tool_calls: [
          { name: 'view_file', args: { AbsolutePath: '/infra/modules/egress_proxy/main.tf', toolSummary: 'Read main.tf' } },
          { name: 'view_file', args: { AbsolutePath: '/infra/modules/egress_proxy/firewall.tf', toolSummary: 'Read firewall.tf' } },
          { name: 'view_file', args: { AbsolutePath: '/infra/modules/egress_proxy/nat.tf', toolSummary: 'Read nat.tf' } },
          { name: 'run_command', args: { CommandLine: './scripts/posture_check.sh', Cwd: '/infra', toolSummary: 'Run 32-point network posture check' } }
        ]
      },
      {
        step_index: 2,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:04Z',
        content: 'Created At: 2026-10-09T14:20:03.100Z\nCompleted At: 2026-10-09T14:20:03.220Z\nRead main.tf (48 lines).'
      },
      {
        step_index: 3,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:04Z',
        content: 'Created At: 2026-10-09T14:20:03.230Z\nCompleted At: 2026-10-09T14:20:03.390Z\nRead firewall.tf (64 lines).'
      },
      {
        step_index: 4,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:04Z',
        content: 'Created At: 2026-10-09T14:20:03.400Z\nCompleted At: 2026-10-09T14:20:03.520Z\nRead nat.tf: source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"'
      },
      {
        step_index: 5,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:05Z',
        content: 'Created At: 2026-10-09T14:20:03.550Z\nCompleted At: 2026-10-09T14:20:05.120Z\nThe command exited with code 1.\nOutput:\n[FAIL] NS-3: Cloud NAT allows ALL_SUBNETWORKS_ALL_IP_RANGES, permitting workload subnet to bypass L7 proxy.'
      },
      {
        step_index: 6,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:07Z',
        thinking: 'Scoping Cloud NAT Strictly to Proxy Subnet\nUpdating nat.tf to LIST_OF_SUBNETWORKS so direct internet bypass is impossible.',
        content: '',
        tool_calls: [
          {
            name: 'replace_file_content',
            args: {
              TargetFile: '/infra/modules/egress_proxy/nat.tf',
              StartLine: 11,
              EndLine: 14,
              TargetContent: '  source_subnetwork_ip_ranges_to_nat = "ALL_SUBNETWORKS_ALL_IP_RANGES"',
              ReplacementContent: '  source_subnetwork_ip_ranges_to_nat = "LIST_OF_SUBNETWORKS"\n  subnetwork {\n    name                    = google_compute_subnetwork.swp_proxy_subnet.id\n    source_ip_ranges_to_nat = ["ALL_IP_RANGES"]\n  }',
              toolSummary: 'Restrict Cloud NAT strictly to proxy subnet'
            }
          },
          {
            name: 'run_command',
            args: { CommandLine: './scripts/posture_check.sh', Cwd: '/infra', toolSummary: 'Re-verify all 32 posture checks' }
          }
        ]
      },
      {
        step_index: 7,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:08Z',
        content: 'Created At: 2026-10-09T14:20:07.100Z\nCompleted At: 2026-10-09T14:20:07.320Z\nThe following changes were made by the replace_file_content tool to: /infra/modules/egress_proxy/nat.tf.'
      },
      {
        step_index: 8,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:09Z',
        content: 'Created At: 2026-10-09T14:20:07.400Z\nCompleted At: 2026-10-09T14:20:08.850Z\nThe command exited with code 0.\nOutput:\n32 PASS / 0 FAIL / 0 WARN'
      },
      {
        step_index: 9,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-09T14:20:10Z',
        thinking: '',
        content: 'Scoped Cloud NAT in `nat.tf` exclusively to `swp_proxy_subnet` (`LIST_OF_SUBNETWORKS`). Re-ran verification: all 32 security posture checks pass (`32 PASS / 0 FAIL`).',
        tool_calls: []
      }
    ],

    [CONV_COMPACTION]: [
      {
        step_index: 0,
        type: 'USER_INPUT',
        source: 'USER_EXPLICIT',
        status: 'DONE',
        created_at: '2026-10-08T11:00:00Z',
        content: '<USER_REQUEST>Migrate legacy REST endpoints across 18 services to typed RPC handlers while preserving backwards compatibility.</USER_REQUEST>'
      },
      {
        step_index: 1,
        type: 'EPHEMERAL_MESSAGE',
        source: 'SYSTEM_SDK',
        status: 'DONE',
        created_at: '2026-10-08T11:00:01Z',
        content: 'Injected workspace conventions: preserve backwards-compatible JSON routes on v1 endpoints and run full integration checks after schema generation.'
      },
      {
        step_index: 2,
        type: 'CHECKPOINT',
        source: 'SYSTEM',
        status: 'DONE',
        created_at: '2026-10-08T11:18:30Z',
        content: 'Compacted 42 earlier migration steps (174,200 tokens -> 28,400 tokens). Completed services 1 through 15 with zero regressions; remaining targets: billing_service, audit_log_service, notification_service.'
      },
      {
        step_index: 3,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-08T11:18:34Z',
        thinking: 'Completing Final Three Service Migrations Post-Compaction\nResuming seamlessly from checkpoint summary to migrate billing, audit_log, and notification handlers.',
        content: '',
        tool_calls: [
          { name: 'replace_file_content', args: { TargetFile: '/services/billing/handler.go', TargetContent: 'func HandleLegacyV1()', ReplacementContent: 'func HandleTypedRPC()', toolSummary: 'Migrate billing handler' } },
          { name: 'run_command', args: { CommandLine: 'go test ./services/...', Cwd: '/workspace', toolSummary: 'Run full Go service test matrix' } }
        ]
      },
      {
        step_index: 4,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-08T11:18:35Z',
        content: 'Created At: 2026-10-08T11:18:34.100Z\nCompleted At: 2026-10-08T11:18:34.420Z\nThe following changes were made by the replace_file_content tool to: /services/billing/handler.go.'
      },
      {
        step_index: 5,
        type: 'GENERIC',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-08T11:18:37Z',
        content: 'Created At: 2026-10-08T11:18:34.480Z\nCompleted At: 2026-10-08T11:18:36.910Z\nThe command exited with code 0.\nOutput:\nok   services/billing      0.412s\nok   services/audit_log    0.289s\nok   services/notification 0.318s'
      },
      {
        step_index: 6,
        type: 'PLANNER_RESPONSE',
        source: 'MODEL',
        status: 'DONE',
        created_at: '2026-10-08T11:18:39Z',
        thinking: '',
        content: 'Completed typed RPC migration across all 18 services with 100% test pass rate and 81.4% prompt cache hit efficiency across 162.8k tokens.',
        tool_calls: []
      }
    ]
  };

  const TELEMETRY = {
    [CONV_PR_AUDIT]: {
      available: true,
      model: 'Gemini 2.5 Pro',
      modelRaw: 'MODEL_GOOGLE_GEMINI_2_5_PRO',
      modelEnum: 'MODEL_GOOGLE_GEMINI_2_5_PRO',
      provider: 'GOOGLE_VERTEX',
      generations: 4,
      inputTokens: 28400,
      uncachedInputTokens: 28400,
      cacheReadTokens: 113600,
      promptTokens: 142000,
      outputTokens: 3250,
      thinkingTokens: 1840,
      totalTokens: 147090,
      cacheHitPct: 80.0,
      totalTtftMs: 1480,
      totalStreamMs: 4920,
      estimatedCostUsd: 0.1218,
      steps: []
    },
    [CONV_TERRAFORM]: {
      available: true,
      model: 'Gemini 2.5 Pro',
      modelRaw: 'MODEL_GOOGLE_GEMINI_2_5_PRO',
      modelEnum: 'MODEL_GOOGLE_GEMINI_2_5_PRO',
      provider: 'GOOGLE_VERTEX',
      generations: 3,
      inputTokens: 19200,
      uncachedInputTokens: 19200,
      cacheReadTokens: 76800,
      promptTokens: 96000,
      outputTokens: 2110,
      thinkingTokens: 1290,
      totalTokens: 99400,
      cacheHitPct: 80.0,
      totalTtftMs: 980,
      totalStreamMs: 3120,
      estimatedCostUsd: 0.0820,
      steps: []
    },
    [CONV_COMPACTION]: {
      available: true,
      model: 'Gemini 2.5 Pro',
      modelRaw: 'MODEL_GOOGLE_GEMINI_2_5_PRO',
      modelEnum: 'MODEL_GOOGLE_GEMINI_2_5_PRO',
      provider: 'GOOGLE_VERTEX',
      generations: 19,
      inputTokens: 30280,
      uncachedInputTokens: 30280,
      cacheReadTokens: 132520,
      promptTokens: 162800,
      outputTokens: 8940,
      thinkingTokens: 5410,
      totalTokens: 177150,
      cacheHitPct: 81.4,
      totalTtftMs: 4210,
      totalStreamMs: 12840,
      estimatedCostUsd: 0.2228,
      steps: []
    }
  };

  const CONVERSATION_LIST = [
    {
      id: CONV_PR_AUDIT,
      title: 'Audit webhook_handler.py for timing attacks & duplicate race conditions',
      turns: 1,
      steps: 10,
      stepCount: 10,
      tools: 5,
      toolCount: 5,
      errors: 1,
      status: 'IDLE',
      lastTool: 'run_command',
      durationMs: 14000,
      createdAt: '2026-10-10T09:14:02Z',
      updatedAt: '2026-10-10T09:14:16Z',
      mtime: 1791623656,
      isAutomation: false,
      isSubagent: false,
      parentId: null,
      subagents: [
        {
          role: 'AppSec Auditor',
          typeName: 'sec-reviewer',
          prompt: 'Audit HMAC signature verification and header parsing in payment-gateway/src/webhook_handler.py.',
          id: CONV_SUB_APPSEC
        },
        {
          role: 'Concurrency Profiler',
          typeName: 'dev-reviewer',
          prompt: 'Check duplicate event ID locking under concurrent webhook retries in webhook_handler.py.',
          id: CONV_SUB_PERF
        }
      ]
    },
    {
      id: CONV_TERRAFORM,
      title: 'Validate two-VPC egress proxy firewall posture in infra/modules/egress_proxy/',
      turns: 1,
      steps: 10,
      stepCount: 10,
      tools: 6,
      toolCount: 6,
      errors: 1,
      status: 'IDLE',
      lastTool: 'run_command',
      durationMs: 10000,
      createdAt: '2026-10-09T14:20:00Z',
      updatedAt: '2026-10-09T14:20:10Z',
      mtime: 1791555610,
      isAutomation: false,
      isSubagent: false,
      parentId: null,
      subagents: []
    },
    {
      id: CONV_COMPACTION,
      title: 'Migrate legacy REST endpoints across 18 services with context compaction',
      turns: 1,
      steps: 7,
      stepCount: 7,
      tools: 2,
      toolCount: 2,
      errors: 0,
      status: 'IDLE',
      lastTool: 'run_command',
      durationMs: 1119000,
      createdAt: '2026-10-08T11:00:00Z',
      updatedAt: '2026-10-08T11:18:39Z',
      mtime: 1791458319,
      isAutomation: true,
      isSubagent: false,
      parentId: null,
      subagents: []
    },
    {
      id: CONV_SUB_APPSEC,
      title: 'AppSec Auditor',
      turns: 1,
      steps: 4,
      stepCount: 4,
      tools: 1,
      toolCount: 1,
      errors: 0,
      status: 'IDLE',
      lastTool: 'view_file',
      durationMs: 3000,
      createdAt: '2026-10-10T09:14:04Z',
      updatedAt: '2026-10-10T09:14:07Z',
      mtime: 1791623647,
      isAutomation: false,
      isSubagent: true,
      parentId: CONV_PR_AUDIT,
      subagents: []
    },
    {
      id: CONV_SUB_PERF,
      title: 'Concurrency Profiler',
      turns: 1,
      steps: 4,
      stepCount: 4,
      tools: 1,
      toolCount: 1,
      errors: 0,
      status: 'IDLE',
      lastTool: 'view_file',
      durationMs: 4000,
      createdAt: '2026-10-10T09:14:04Z',
      updatedAt: '2026-10-10T09:14:08Z',
      mtime: 1791623648,
      isAutomation: false,
      isSubagent: true,
      parentId: CONV_PR_AUDIT,
      subagents: []
    }
  ];

  function jsonResponse(payload) {
    return Promise.resolve(
      new Response(JSON.stringify(payload), {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      })
    );
  }

  const origFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    const rawUrl = typeof input === 'string' ? input : input && input.url ? input.url : '';
    const parsed = new URL(rawUrl, window.location.origin);
    const pathname = parsed.pathname;

    if (pathname.endsWith('/api/update-status')) {
      return jsonResponse({ supported: false, update_available: false, behind: 0, ahead: 0 });
    }
    if (pathname.endsWith('/api/conversations')) {
      return jsonResponse({ conversations: CONVERSATION_LIST });
    }
    if (pathname.endsWith('/api/subagents_status')) {
      const ids = (parsed.searchParams.get('ids') || '').split(',').filter(Boolean);
      const map = {};
      ids.forEach((id) => {
        map[id] = {
          id,
          available: true,
          status: 'DONE',
          steps: 4,
          tools: 1,
          errors: 0,
          lastTool: 'view_file',
          durationMs: 3200,
          updatedAt: '2026-10-10T09:14:08Z'
        };
      });
      return jsonResponse({ subagents: map });
    }
    if (pathname.endsWith('/api/telemetry')) {
      const cid = parsed.searchParams.get('conversationId') || defaultConvId;
      return jsonResponse(TELEMETRY[cid] || TELEMETRY[CONV_PR_AUDIT]);
    }
    if (pathname.endsWith('/api/transcript')) {
      const cid = parsed.searchParams.get('conversationId') || defaultConvId;
      const since = parseInt(parsed.searchParams.get('since') || '-1', 10);
      const steps = TRANSCRIPTS[cid] || TRANSCRIPTS[CONV_PR_AUDIT];
      return jsonResponse(since < 0 ? steps : steps.filter((s) => s.step_index > since));
    }
    if (pathname.endsWith('/api/step_full')) {
      const cid = parsed.searchParams.get('conversationId') || defaultConvId;
      const stepIdx = parseInt(parsed.searchParams.get('step') || '0', 10);
      const steps = TRANSCRIPTS[cid] || TRANSCRIPTS[CONV_PR_AUDIT];
      return jsonResponse(steps.find((s) => s.step_index === stepIdx) || {});
    }

    return origFetch(input, init);
  };
})();
