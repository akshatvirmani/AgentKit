// Flow: rag-for-mcp-docs

// -- Meta --
export const meta = {
  "name": "RAG for MCP Docs",
  "description": "",
  "tags": [],
  "testInput": null,
  "githubUrl": "",
  "documentationUrl": "",
  "deployUrl": "",
  "author": {
    "name": "Akshat Virmani",
    "email": "akshatvirmani72@gmail.com"
  }
};

// -- Inputs --
export const inputs = {
  "RAGNode_870": [
    {
      "name": "vectorDB",
      "label": "Database",
      "type": "select"
    },
    {
      "name": "embeddingModelName",
      "label": "Embedding Model Name",
      "type": "model"
    },
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ]
};

// -- References --
export const references = {
  "constitutions": {
    "default": "@constitutions/default.md"
  },
  "prompts": {
    "rag_for_mcp_docs_ragnode_870_system_0": "@prompts/rag-for-mcp-docs_ragnode-870_system_0.md",
    "rag_for_mcp_docs_ragnode_870_user_1": "@prompts/rag-for-mcp-docs_ragnode-870_user_1.md"
  },
  "modelConfigs": {
    "rag_for_mcp_docs_ragnode_870_generative_model_name": "@model-configs/rag-for-mcp-docs_ragnode-870_generative-model-name.ts",
    "rag_for_mcp_docs_ragnode_870_embedding_model_name": "@model-configs/rag-for-mcp-docs_ragnode-870_embedding-model-name.ts"
  }
};

// -- Nodes & Edges --
export const nodes = [
  {
    "id": "triggerNode_1",
    "type": "triggerNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "graphqlNode",
      "trigger": true,
      "values": {
        "id": "triggerNode_1",
        "nodeName": "API Request",
        "responeType": "realtime",
        "advance_schema": "{\n  \"question\": \"string\"\n}"
      }
    }
  },
  {
    "id": "RAGNode_870",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "RAGNode",
      "values": {
        "id": "RAGNode_870",
        "limit": "3",
        "filters": "",
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "role": "system",
            "content": "@prompts/rag-for-mcp-docs_ragnode-870_system_0.md"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "role": "user",
            "content": "@prompts/rag-for-mcp-docs_ragnode-870_user_1.md"
          }
        ],
        "memories": "",
        "messages": "",
        "nodeName": "RAG",
        "vectorDB": [
          "MCPDocsNew"
        ],
        "certainty": "0.7",
        "queryField": "{{triggerNode_1.output.question}}",
        "embeddingModelName": "@model-configs/rag-for-mcp-docs_ragnode-870_embedding-model-name.ts",
        "generativeModelName": "@model-configs/rag-for-mcp-docs_ragnode-870_generative-model-name.ts"
      }
    }
  },
  {
    "id": "responseNode_triggerNode_1",
    "type": "responseNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "graphqlResponseNode",
      "values": {
        "id": "responseNode_triggerNode_1",
        "headers": "{\"content-type\":\"application/json\"}",
        "retries": "0",
        "nodeName": "API Response",
        "webhookUrl": "",
        "retry_delay": "0",
        "outputMapping": "{\n  \"answer\": \"{{RAGNode_870.output.modelResponse}}\"\n}"
      }
    }
  }
];

export const edges = [
  {
    "id": "triggerNode_1-RAGNode_870",
    "source": "triggerNode_1",
    "target": "RAGNode_870",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "RAGNode_870-responseNode_triggerNode_1",
    "source": "RAGNode_870",
    "target": "responseNode_triggerNode_1",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "response-trigger_triggerNode_1",
    "source": "triggerNode_1",
    "target": "responseNode_triggerNode_1",
    "sourceHandle": "to-response",
    "targetHandle": "from-trigger",
    "type": "responseEdge"
  }
];

export default { meta, inputs, references, nodes, edges };
