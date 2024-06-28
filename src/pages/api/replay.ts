import { PluginErrorType, createErrorResponse } from '@aipmorg/chat-plugin-sdk';

import { fetchReplay } from '@/servers/fetchReplay';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { avid } = (await req.json()) as { avid: string };

  const result = await fetchReplay(avid);

  return new Response(JSON.stringify(result));
};
