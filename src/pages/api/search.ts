import { PluginErrorType, createErrorResponse } from '@aipmorg/chat-plugin-sdk';

import { fetchSearch } from '@/servers/fetchSearch';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { keywords } = (await req.json()) as { keywords: string };

  const result = await fetchSearch(keywords);

  return new Response(JSON.stringify(result));
};
